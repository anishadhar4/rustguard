import { useState } from "react";
import axios from "axios";

export default function Detection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));  // preview image
  };

  const uploadImage = async () => {
    if (!image) return alert("Please select an image first!");

    const form = new FormData();
    form.append("file", image);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/detection/detect",  // <-- FIXED URL
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
    <div>
      <h1 className="gradient-title">Rust Detection</h1>
      <p style={{opacity:0.7}}>Upload a metal surface image to detect rust severity</p>

      {/* File Input */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImage} 
        style={{marginTop:20}}
      />

      {/* Image Preview */}
      {preview && (
        <div style={{marginTop:20}}>
          <img 
            src={preview} 
            alt="Preview" 
            style={{width:"350px",borderRadius:"10px"}} 
          />
        </div>
      )}

      {/* Upload + Detect Button */}
      <button onClick={uploadImage} className="btn-primary" style={{marginTop:20}}>
  {loading ? "Processing..." : "Detect Rust"}
</button>


      {/* JSON Result Display */}
      {result && (
        <div style={{marginTop:30}}>
          <h2>Detection Result:</h2>
          <pre style={{
            background:"rgba(255,255,255,0.05)",
            padding:15,
            borderRadius:10,
            marginTop:10,
            overflow:"auto",
            maxHeight:"250px"
          }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

