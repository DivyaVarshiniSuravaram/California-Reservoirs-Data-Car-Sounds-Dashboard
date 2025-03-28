import React, { useEffect, useState } from "react";
import { fetchReservoirs } from "../api/api";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import './ReservoirChart.css';

export default function ReservoirChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchReservoirs().then(setData);
  }, []);

  return (
    <div className="reservoir-chart">
      <h2>Reservoir Water Levels</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="WaterLevel" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
