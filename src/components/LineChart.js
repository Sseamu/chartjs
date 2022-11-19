import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
//선차트의 경우 모든 색상이 동일하다 .
function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

export default LineChart;
