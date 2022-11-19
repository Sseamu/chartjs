import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bar data={chartData} />; //options는 종횡비 및 애니메이션을 만들어준다 options={{}}
}

export default BarChart;
