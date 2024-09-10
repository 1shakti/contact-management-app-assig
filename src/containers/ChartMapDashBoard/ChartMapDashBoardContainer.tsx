import React from "react";
import WorldWideDataContainer from "./WorldWideDataContainer";
import LineChartContainer from "./LineChartContainer";
import CovidMapContainer from "./CovidMapContainer";

function ChartMapDashBoardContainer() {
  return (
    <main className="w-full p-4 overflow-auto h-[85vh]">
      <WorldWideDataContainer />
      <br />
      <LineChartContainer />
      <br />
      <CovidMapContainer />
    </main>
  );
}

export default ChartMapDashBoardContainer;
