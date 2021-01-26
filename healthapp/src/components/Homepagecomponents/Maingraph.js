import axios from "axios";
import Highcharts, { destroyObjectProperties } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import config from "../../config.json"

function Maingraph(props){
  const [graphdatabodyfat, setgraphdatabodyfat] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const [graphdataweight, setgraphdataweight] = useState([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);

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
        data:graphdatabodyfat,
        tooltip: {
          valueSuffix: " %",
        },
      },
      {
        name: "Body Weight",
        type: "spline",
        data: graphdataweight,
        tooltip: {
          valueSuffix: "Kg",
        },
      },
    ],
  };

  async function getgraphdata(){
    await axios.get(
      config.apiserver+"updates/gethealthdetailscurrentyear/"+props.curremail
    ).then(data=>{
      var listofbodyfat=[]
      var listofweight=[]
      for (var x of data.data){
        listofbodyfat.push(x["bodyfat"]);
        listofweight.push(x["weight"]);
      }
        setgraphdatabodyfat(listofbodyfat);
        setgraphdataweight(listofweight);
    });
  }

  useEffect(()=>{
    getgraphdata();
  },[]);

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