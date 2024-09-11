// components/Dashboard.js

import { Line, Bar, Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchLineChartData, fetchBarChartData, fetchPieChartData } from '../services/api';

export default function Dashboard() {
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const lineChartData = await fetchLineChartData();
      setLineData({
        labels: lineChartData.labels,
        datasets: [{ data: lineChartData.data, label: 'Line Chart', borderColor: '#3333ff' }]
      });

      const barChartData = await fetchBarChartData();
      setBarData({
        labels: barChartData.labels,
        datasets: [{ data: barChartData.data, label: 'Bar Chart', backgroundColor: '#3e95cd' }]
      });

      const pieChartData = await fetchPieChartData();
      setPieData({
        labels: pieChartData.labels,
        datasets: [{ data: pieChartData.data, backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'] }]
      });
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {lineData && <Line data={lineData} />}
      {barData && <Bar data={barData} />}
      {pieData && <Pie data={pieData} />}
    </div>
  );
}
