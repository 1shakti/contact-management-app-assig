import { CountryData, HistoricalData, WorldData } from "../types";

export const fetchWorldData = async (): Promise<WorldData> => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  return response.json();
};

export const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  return response.json();
};

export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.json();
};
