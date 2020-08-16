import React, { Component } from "react";
import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Commute", 0.5],
  ["Watch TV", 2],
  ["Study", 2],
  ["Gym", 1.5],
  ["Sleep", 7]
];

class Pie3DComponent extends Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <Chart
        width={"1100px"}
        height={"900px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: "Daily Activities",
          is3D: true
        }}
        rootProps={{ "data-testid": "2" }}
      />
    );
  }
}

export default Pie3DComponent;
