import { BarChart } from "react-d3-components";

var data = [
  {
    label: "somethingA",
    values: [
      { x: "SomethingA", y: 10 },
      { x: "SomethingB", y: 4 },
      { x: "SomethingC", y: 3 },
    ],
  },
];
function Bar() {
  return (
    <BarChart
      data={data}
      width={400}
      height={400}
      margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
    />
  );
}
export default Bar;
