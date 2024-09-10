import React from "react";
import { useQuery } from "react-query";
import { WorldData } from "../../types";
import { fetchWorldData } from "../../services/apis";
import WorldWideData from "../../components/map/WorldWideData";

function WorldWideDataContainer() {
  const { data, isLoading, error } = useQuery<WorldData, Error>(
    ["worldData"],
    fetchWorldData
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!data) return <p>No Data Found</p>;

  return <WorldWideData data={data} title="Global COVID-19 Data" />;
}

export default WorldWideDataContainer;
