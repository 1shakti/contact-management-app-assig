import React from "react";
import { useQuery } from "react-query";
import { HistoricalData } from "../../types";
import { fetchHistoricalData } from "../../services/apis";
import LineChart from "../../components/chart/LineChart";

function LineChartContainer() {
  const { data, isLoading, error } = useQuery<HistoricalData, Error>(
    ["historicalData"],
    fetchHistoricalData
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!data) return <p>No Data Found</p>;

  return (
    <div>
      <LineChart data={data} title="Global COVID-19 Trends" />
    </div>
  );
}

export default LineChartContainer;
