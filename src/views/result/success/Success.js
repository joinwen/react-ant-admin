import { getPermissions } from "../../../store/user/user";
import { useSelector, useDispatch } from "react-redux";
function Success() {
  const permissions = useSelector((state) => state.user.permissions);
  const dispatch = useDispatch();
  return <h2>Success
  <button onClick={() => dispatch(getPermissions([1,2,3]))}>{permissions}</button>
  </h2>;
}
export default Success;
