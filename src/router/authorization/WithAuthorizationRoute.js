import { Route } from "react-router-dom";
import isAuthorized from "../../tools/authorizationUtil";
import Forbidden from "../../views/exception/forbidden/Forbidden";
function WithAuthorizationRoute({children, ...rest}) {
  let { permissions } = rest,
    comp = null;
  if(isAuthorized(permissions)) {
    comp = children;
  } else {
    comp = <Forbidden/>;
  }
  return (
    <Route {...rest}>
      { comp }
    </Route>
  )
}
export default WithAuthorizationRoute;
