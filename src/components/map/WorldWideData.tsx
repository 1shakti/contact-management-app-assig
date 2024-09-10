import React from "react";
import { WorldData } from "../../types";

interface Props {
  data: WorldData;
  title: string;
}

function WorldWideData({ data, title }: Props) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>Total Cases: {data.cases.toLocaleString()}</p>
      <p>Total Deaths: {data.deaths.toLocaleString()}</p>
      <p>Total Recovered: {data.recovered.toLocaleString()}</p>
    </div>
  );
}

export default WorldWideData;
