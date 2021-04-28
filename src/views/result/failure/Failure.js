import { useSelector, useDispatch } from "react-redux";
import { SET_SIZE } from "../../../store/app/app";
function Failure() {
  const size = useSelector(state => state.app.size);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(SET_SIZE("sm"));
  }
  return <h2>
    Failure {size}
    <button onClick={handleClick}>点击</button>
  </h2>;
}
export default Failure;
