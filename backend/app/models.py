from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field


class RustBox(BaseModel):
    x: int
    y: int
    width: int
    height: int
    confidence: float = Field(..., ge=0, le=1)


class DetectionResponse(BaseModel):
    id: str
    structure_id: Optional[str] = None
    severity: str
    severity_score: float = Field(..., ge=0, le=1)
    boxes: List[RustBox]
    image_url: Optional[str] = None
    detected_at: datetime
