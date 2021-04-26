import getAccessToken from "../../tools/loginUtil";
import { Route, Redirect } from "react-router-dom";
function WithAuthenticationRoute({ children, ...rest }) {
  let token = getAccessToken(),
    comp = null;
  if (token) {
    comp = children;
  } else {
    comp = <Redirect to="/login"/>;
  }
  return <Route {...rest}>{comp}</Route>;
}
export default WithAuthenticationRoute;
