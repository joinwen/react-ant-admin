import WithNotMatch from "../../router/not-match/WithNotMatch";
import NotFound from "./not-found/NotFound";
import Forbidden from "./forbidden/Forbidden";
import Error from "./error/Error";
import { Route } from "react-router-dom";
function Exception() {
  return (
    <WithNotMatch>
      <Route path="/exception/not-found">
        <NotFound />
      </Route>
      <Route path="/exception/forbidden">
        <Forbidden />
      </Route>
      <Route path="/exception/error">
        <Error />
      </Route>
    </WithNotMatch>
  );
}
export default Exception;
