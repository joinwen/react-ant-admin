import { setDocumentTitle, domTitle } from "../../tools/domUtil";
import { useLocation, useHistory } from "react-router-dom";
import { LOGIN_PATH, DEFAULT_PATH, WHITELIST } from "../../config/globalConfig";
import isAuthenticated from "../../tools/authenticationUtil";
function GuardRoute(props) {
  const location = useLocation(),
      history = useHistory();
  setDocumentTitle(`${domTitle}-${props.title || ""}`);
  if(isAuthenticated()) {
    console.log(location);
    console.log(history);
    if(location.pathname === LOGIN_PATH) {
      history.push(DEFAULT_PATH);
    }
  } else {
    if(WHITELIST.includes(location.pathname)) {
    } else {
      history.push(`${LOGIN_PATH}?redirect=${location.pathname}`);
    }
  }
  return (
      props.children
  )
}
export default GuardRoute;
