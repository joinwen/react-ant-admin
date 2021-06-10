import BaseChart from "../../../../components/base-chart/BaseChart";
import theme from "../assets/theme.json";
BaseChart.registerTheme("my", theme);
function Polar() {
  const data = [];
  for (let i = 0; i <= 360; i++) {
    const t = (i / 180) * Math.PI;
    const r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
  }
  const options = {
    title: {
      text: "极坐标双数值轴",
    },
    legend: {
      data: ["line"],
    },
    polar: {
      center: ["50%", "54%"],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    angleAxis: {
      type: "value",
      startAngle: 0,
    },
    radiusAxis: {
      min: 0,
    },
    series: [
      {
        coordinateSystem: "polar",
        name: "line",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
    animationDuration: 2000,
  };
  return (
    <BaseChart options={options} theme="my" />
  )
}
export default Polar;
