import isAuthenticated from "../../tools/authenticationUtil";
import { useLocation } from "react-router-dom";
import { LOGIN_PATH } from "../../config/globalConfig";
import { Route, Redirect } from "react-router-dom";
function WithAuthenticationRoute({ children, ...rest }) {
  let comp = null;
  const location = useLocation();
  if (isAuthenticated()) {
    comp = children;
  } else {
    comp = <Redirect to={`${LOGIN_PATH}?redirect=${location.pathname}`} />;
  }
  return <Route {...rest}>{comp}</Route>;
}
export default WithAuthenticationRoute;
