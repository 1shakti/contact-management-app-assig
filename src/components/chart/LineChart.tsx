import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { HistoricalData } from "../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: HistoricalData;
  title: string;
}

function LineChart({ data, title }: Props) {
  const dates = Object.keys(data.cases);
  const cases = dates.map((date) => data.cases[date]);
  const deaths = dates.map((date) => data.deaths[date] || 0);
  const recovered = dates.map((date) => data.recovered[date] || 0);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full h-full p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
