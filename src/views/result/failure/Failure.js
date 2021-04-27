import { useSelector } from "react-redux";
function Failure() {
  const size = useSelector(state => state.app.size);
  return <h2>
    Failure {size}
  </h2>;
}
export default Failure;
