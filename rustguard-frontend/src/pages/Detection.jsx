import { useState } from "react";
import axios from "axios";
import PageWrapper from "../components/PageWrapper";

export default function Detection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!image) return alert("Please select an image first!");

    const form = new FormData();
    form.append("file", image);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/detection/detect",
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);
      setLoading(false);

    } catch (err) {
      console.error(err);
      alert("Upload failed. Check backend server.");
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <h1 className="gradient-title">Rust Detection</h1>
      <p style={{ opacity: 0.7 }}>Upload a metal surface image to detect rust severity</p>

      <div className="glass-panel" style={{ marginTop: 24 }}>

        <input type="file" accept="image/*" onChange={handleImage} style={{ marginTop: 15 }} />

        {preview && (
          <div style={{ marginTop: 20 }}>
            <img src={preview} style={{ width: "350px", borderRadius: "10px" }} />
          </div>
        )}

        <button onClick={uploadImage} className="btn-primary" style={{ marginTop: 20 }}>
          {loading ? "Processing..." : "Detect Rust"}
        </button>

        {result && (
          <div style={{ marginTop: 35 }}>
            <h2 className="gradient-title">Detection Result</h2>

            <div className="result-box">

              {/* RESULT CARD 1 - SEVERITY */}
              <div className="result-card">
                <p className="result-title">Severity</p>
                <p className="result-value" style={{
                  color: result.severity === "high" ? "#ef4444" :
                         result.severity === "medium" ? "#f59e0b" :
                         result.severity === "low" ? "#22c55e" :
                         "#9ca3af"
                }}>
                  {result.severity.toUpperCase()}
                </p>
              </div>

              {/* RESULT CARD 2 - SCORE */}
              <div className="result-card">
                <p className="result-title">Severity Score</p>
                <p className="result-value">{result.severity_score}</p>
              </div>

              {/* RESULT CARD 3 - BOX COUNT */}
              <div className="result-card">
                <p className="result-title">Detected Rust Regions</p>
                <p className="result-value">{result.boxes.length}</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
