import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngExpression } from "leaflet";
import { CountryData } from "../../types";

interface Props {
  countries: CountryData[];
  title: string;
}

function CovidMap({ countries, title }: Props) {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries.map((country) => {
          const flagUrl = country.countryInfo.flag;
          const icon = L.icon({
            iconUrl: flagUrl,
            iconSize: [32, 20],
            iconAnchor: [16, 20],
            popupAnchor: [0, -20],
          });

          return (
            <Marker
              key={country.country}
              position={
                [
                  country.countryInfo.lat,
                  country.countryInfo.long,
                ] as LatLngExpression
              }
              icon={icon}
            >
              <Popup>
                <strong>{country.country}</strong>
                <br />
                Active: {country.active}
                <br />
                Recovered: {country.recovered}
                <br />
                Deaths: {country.deaths}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default CovidMap;
