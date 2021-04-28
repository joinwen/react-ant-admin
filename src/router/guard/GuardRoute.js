import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getPermissions} from "../../store/permission/permission";
function GuardRoute(props) {
  let history = useHistory();
  console.log(history);
  let permissions = useSelector(state => state.permission.permissions),
    dispatch = useDispatch();
  if(!permissions) {
    dispatch(getPermissions);
  }
  return (
    props.children
  )
}
export default GuardRoute;
