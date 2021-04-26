import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
function Result() {
  return (
    <WithNotMatchSwitch>
      <WithAuthenticationRoute exact path="/result/success">
        <h2>Success</h2>
      </WithAuthenticationRoute>
      <WithAuthenticationRoute exact path="/result/failure">
        <h2>Failure</h2>
      </WithAuthenticationRoute>
    </WithNotMatchSwitch>
  );
}
export default Result;
