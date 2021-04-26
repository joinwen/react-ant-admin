import isAuthenticated from "../../tools/authenticationUtil";
import { Route, Redirect } from "react-router-dom";
function WithAuthenticationRoute({ children, ...rest }) {
  let comp = null;
  if (isAuthenticated()) {
    comp = children;
  } else {
    comp = <Redirect to="/login"/>;
  }
  return <Route {...rest}>{comp}</Route>;
}
export default WithAuthenticationRoute;
