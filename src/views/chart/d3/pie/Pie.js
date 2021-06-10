import { PieChart } from "react-d3-components";
function Pie() {
  const data = {
    label: "somethingA",
    values: [
      { x: "SomethingA", y: 10 },
      { x: "SomethingB", y: 4 },
      { x: "SomethingC", y: 3 },
    ],
  };

  const sort = null;
  return <PieChart data={data} width={600} height={400} sort={sort} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />;
}
export default Pie;
