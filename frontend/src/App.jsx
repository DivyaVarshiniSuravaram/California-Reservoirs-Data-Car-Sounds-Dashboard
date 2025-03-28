import React from "react";
import ReservoirPage from "./pages/ReservoirPage";
import CarAudioPage from "./pages/CarAudioPage";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ReservoirPage />
      <hr />
      <CarAudioPage />
    </div>
  );
}

export default App;
