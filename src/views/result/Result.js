import { Route } from "react-router-dom";
import WithNotMatch from "../../router/not-match/WithNotMatch";
function Result() {
  return (
    <WithNotMatch>
      <Route exact path="/result/success">
        <h2>Success</h2>
      </Route>
      <Route exact path="/result/failure">
        <h2>Failure</h2>
      </Route>
    </WithNotMatch>
  )
};
export default Result;
