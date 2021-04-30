import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import NotFound from "./not-found/NotFound";
import Forbidden from "./forbidden/Forbidden";
import Error from "./error/Error";
import WithAuthorizationRoute from "../../router/authorization/WithAuthorizationRoute";
import GuardRoute from "../../router/guard/GuardRoute";
function Exception() {
  return (
    <WithNotMatchSwitch>
      <GuardRoute path="/exception/not-found" title="未找到">
        <WithAuthenticationRoute>
          <WithAuthorizationRoute>
            <NotFound />
          </WithAuthorizationRoute>
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/exception/forbidden" title="禁止访问">
        <WithAuthenticationRoute>
          <WithAuthorizationRoute>
            <Forbidden />
          </WithAuthorizationRoute>
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/exception/error" title="内部错误">
        <WithAuthenticationRoute>
          <WithAuthorizationRoute>
            <Error />
          </WithAuthorizationRoute>
        </WithAuthenticationRoute>
      </GuardRoute>

    </WithNotMatchSwitch>
  );
}
export default Exception;
