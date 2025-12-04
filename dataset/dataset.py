
from roboflow import Roboflow

rf = Roboflow(api_key="iV5rfmh8uniTwJi5cgl6")
project = rf.workspace("corrosion-metal-y-corrosion").project("corrosion-metal")
version = project.version(3)
dataset = version.download("yolov8")

print("Dataset downloaded to:", dataset.location)
