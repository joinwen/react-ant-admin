import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import Failure from "./failure/Failure";
import Success from "./success/Success";
import GuardRoute from "../../router/guard/GuardRoute";
import WithAuthorizationRoute from "../../router/authorization/WithAuthorizationRoute";
function Result() {
  return (
    <WithNotMatchSwitch>
      <GuardRoute path="/result/success" title="成功">
        <WithAuthenticationRoute>
          <WithAuthorizationRoute>
            <Success />
          </WithAuthorizationRoute>
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/result/failure" title="失败">
        <WithAuthenticationRoute>
          <WithAuthorizationRoute>
            <Failure />
          </WithAuthorizationRoute>
        </WithAuthenticationRoute>
      </GuardRoute>
    </WithNotMatchSwitch>
  );
}
export default Result;
