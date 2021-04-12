import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme); //setting component

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "Pie3D",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Used Languages",
        theme: "fusion",
        pieRadius: "50%",
      },
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
