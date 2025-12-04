import os
from ultralytics import YOLO

# Folder where we'll keep custom models (optional)
BASE_DIR = os.path.dirname(__file__)
MODEL_DIR = os.path.join(BASE_DIR, "ml_models")
os.makedirs(MODEL_DIR, exist_ok=True)

# If you later train a custom rust model, put it as:
# app/ml_models/rustguard_rust_yolov8.pt
CUSTOM_MODEL_PATH = os.path.join(MODEL_DIR, "rustguard_rust_yolov8.pt")

print("🔁 Loading YOLOv8 model...")

if os.path.exists(CUSTOM_MODEL_PATH):
    print(f"Using custom RustGuard model: {CUSTOM_MODEL_PATH}")
    model = YOLO(CUSTOM_MODEL_PATH)
else:
    # Fallback: use general YOLOv8n pretrained on COCO
    # This will be auto-downloaded on first run (needs internet once)
    print("Custom rust model not found. Falling back to YOLOv8n (general).")
    model = YOLO("yolov8n.pt")  # lightweight model
