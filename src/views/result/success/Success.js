import { getPermissions } from "../../../store/permission/permission";
import { useSelector, useDispatch } from "react-redux";
function Success() {
  const permissions = useSelector((state) => state.permission.permissions);
  const dispatch = useDispatch();
  return <h2>Success
  <button onClick={() => dispatch(getPermissions([1,2,3]))}>{permissions}</button>
  </h2>;
}
export default Success;
