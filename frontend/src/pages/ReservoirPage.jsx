import React from "react";
import ReservoirChart from "../components/ReservoirChart";

export default function ReservoirPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>💧 Reservoir Dashboard</h1>
      <p style={{ color: '#666' }}>Visual overview of current reservoir water levels</p>
      <ReservoirChart />
    </div>
  );
}
