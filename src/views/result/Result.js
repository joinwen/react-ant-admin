import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import Failure from "./failure/Failure";
import Success from "./success/Success";
function Result() {
  return (
    <WithNotMatchSwitch>
      <WithAuthenticationRoute exact path="/result/success">
        <Success />
      </WithAuthenticationRoute>
      <WithAuthenticationRoute exact path="/result/failure">
        <Failure />
      </WithAuthenticationRoute>
    </WithNotMatchSwitch>
  );
}
export default Result;
