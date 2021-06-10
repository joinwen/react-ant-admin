import BaseChart from "../../../../components/base-chart/BaseChart";
import theme from "../assets/theme.json";
BaseChart.registerTheme("my", theme);
function randomize() {
  return [0, 0, 0].map(() => {
    return Math.round(300 + Math.random() * 700) / 10;
  });
}
function Bar() {
  const options = {
    legend: {
      show: false,
    },
    tooltip: {},
    dataset: {
      // Provide data.
      source: [
        ["Product", "2015", "2016", "2017"],
        ["Matcha Latte", ...randomize()],
        ["Milk Tea", ...randomize()],
        ["Cheese Cocoa", ...randomize()],
        ["Walnut Brownie", ...randomize()],
      ],
    },
    // Declare X axis, which is a category axis, mapping
    // to the first column by default.
    xAxis: { type: "category" },
    // Declare Y axis, which is a value axis.
    yAxis: {},
    // Declare several series, each of them mapped to a
    // column of the dataset by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };
  return <BaseChart options={options} theme="my" />;
}
export default Bar;
