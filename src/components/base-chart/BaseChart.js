import "./BaseChart.scss";
import { useRef } from "react";
import echarts from "echarts";
import { useEffect } from "react";

function BaseChart(props) {
  let options = props.options,
    chartRef = useRef(null),
    chart = null;
  useEffect(() => {
    console.log(options);
    if(!chart) {
      chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
  })
  return <div className="base-chart" ref={chartRef}>
    <h2>echarts</h2>
  </div>
}
export default BaseChart;
