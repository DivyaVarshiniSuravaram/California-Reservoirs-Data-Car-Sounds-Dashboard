import React from "react";
import AudioUploader from "../components/AudioUploader";

export default function CarAudioPage() {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h1>🔊 Car Audio Anomaly Detection</h1>
      <p style={{ color: '#666' }}>Upload a car or motor sound to detect abnormal behavior</p>
      <AudioUploader />
    </div>
  );
}
