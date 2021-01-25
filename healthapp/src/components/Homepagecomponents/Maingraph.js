import react from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  colors: ["#058DC7", "#50B432"],
  chart: {
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      "#3E4551",
    color: "#FFFFFF",
  },
  title: {
    text: "Body Weight and Fat Percentage",
    style: {
      color: "#FFFFFF",
    },
  },
  subtitle: {
    text: "",
  },
  xAxis: [
    {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
    },
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}Kg",
        style: {
          color: "#50C878",
        },
      },
      title: {
        text: "Body Weight",
        style: {
          color: "#50C878",
        },
      },
    },
    {
      // Secondary yAxis
      title: {
        text: "Body Fat Percentage",
        style: {
          color: Highcharts.getOptions().colors[0],
        },
      },
      labels: {
        format: "{value} %",
        style: {
          color: Highcharts.getOptions().colors[0],
        },
      },
      opposite: true,
    },
  ],
  tooltip: {
    shared: true,
  },
  legend: {
    layout: "vertical",
    align: "left",
    x: 120,
    verticalAlign: "top",
    y: 100,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      "rgba(255,255,255,0.25)",
      
  },
  series: [
    {
      name: "Body Fat",
      type: "column",
      yAxis: 1,
      data: [
        20.0,
        21.5,
        21.4,
        20.8,
        21.0,
        20.5,
        20.0,
        19.5,
        19.4,
        19.1,
        19.6,
        18.4,
      ],
      tooltip: {
        valueSuffix: " %",
      },
    },
    {
      name: "Body Weight",
      type: "spline",
      data: [
        77.0,
        76.9,
        79.5,
        75.5,
        74.2,
        74.5,
        73.2,
        73.5,
        72.3,
        71.3,
        70.9,
        69.6,
      ],
      tooltip: {
        valueSuffix: "Kg",
      },
    },
  ],
};

function Maingraph(){
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
}

export default Maingraph;