import React from "react";
import { useQuery } from "react-query";
import { CountryData } from "../../types";
import { fetchCountryData } from "../../services/apis";
import CovidMap from "../../components/map/CovidMap";

function CovidMapContainer() {
  const { data, isLoading, error } = useQuery<CountryData[], Error>(
    ["countryData"],
    fetchCountryData
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!data) return <p>No Data Found</p>;

  return (
    <>
      <CovidMap countries={data} title="COVID-19 Cases by Country" />
    </>
  );
}

export default CovidMapContainer;
