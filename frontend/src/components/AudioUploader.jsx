import React, { useState } from "react";
import { uploadAudio } from "../api/api";
import './AudioUploader.css';

export default function AudioUploader() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    const res = await uploadAudio(file);
    setResult(res);
  };

  return (
    <div className="audio-uploader">
      <input type="file" accept="audio/*" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {result && <div className="result">Prediction: {result}</div>}
    </div>
  );
}
