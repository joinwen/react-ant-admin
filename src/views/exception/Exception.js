import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import NotFound from "./not-found/NotFound";
import Forbidden from "./forbidden/Forbidden";
import Error from "./error/Error";
function Exception() {
  return (
    <WithNotMatchSwitch>
      <WithAuthenticationRoute path="/exception/not-found">
        <NotFound />
      </WithAuthenticationRoute>
      <WithAuthenticationRoute path="/exception/forbidden">
        <Forbidden />
      </WithAuthenticationRoute>
      <WithAuthenticationRoute path="/exception/error">
        <Error />
      </WithAuthenticationRoute>
    </WithNotMatchSwitch>
  );
}
export default Exception;
