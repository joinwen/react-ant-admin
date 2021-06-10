import "./BaseChart.scss";
import { useRef } from "react";
import echarts from "echarts";
import { useEffect } from "react";

function BaseChart(props) {
  let options = props.options,
    theme = props.theme,
    chartRef = useRef(null);
  useEffect(() => {
    let chart = echarts.init(chartRef.current, theme);
    chart.setOption(options);
  });
  return (
    <div className="base-chart" ref={chartRef}>
      <h2>echarts</h2>
    </div>
  );
}
BaseChart.registerTheme = (name, theme) => {
  echarts.registerTheme(name, theme);
};
BaseChart.registerMap = (name, theme) => {
  echarts.registerMap(name, theme);
};
export default BaseChart;
