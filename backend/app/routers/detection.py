from fastapi import APIRouter, UploadFile, File, HTTPException
from ultralytics import YOLO
from PIL import Image
import io
import os
from datetime import datetime
import uuid

router = APIRouter(prefix="/api/detection", tags=["detection"])

# Load YOLO model (default - replace with best.pt later after training)
model = YOLO("yolov8n.pt")  # keep for now. Later: model = YOLO("model/best.pt")


@router.post("/detect")
async def detect_rust(file: UploadFile = File(...)):
    try:
        # Read file bytes
        contents = await file.read()

        # Convert to image
        img = Image.open(io.BytesIO(contents))

        # Run YOLO detection
        results = model.predict(img)

        boxes_data = []
        for box in results[0].boxes:
            boxes_data.append({
                "x": int(box.xyxy[0][0]),
                "y": int(box.xyxy[0][1]),
                "width": int(box.xyxy[0][2] - box.xyxy[0][0]),
                "height": int(box.xyxy[0][3] - box.xyxy[0][1]),
                "confidence": float(box.conf[0])
            })

        # SEVERITY LOGIC (simple temp logic)
        severity_score = sum([b["confidence"] for b in boxes_data])
        if severity_score == 0:
            severity = "none"
        elif severity_score < 1.5:
            severity = "low"
        elif severity_score < 3:
            severity = "medium"
        else:
            severity = "high"

        # Save file locally
        filename = f"{uuid.uuid4().hex}.jpg"
        save_path = os.path.join("uploads", filename)
        os.makedirs("uploads", exist_ok=True)
        with open(save_path, "wb") as f:
            f.write(contents)

        return {
            "id": uuid.uuid4().hex,
            "severity": severity,
            "severity_score": round(float(severity_score), 2),
            "boxes": boxes_data,
            "image_url": save_path,
            "detected_at": datetime.now().isoformat()
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

