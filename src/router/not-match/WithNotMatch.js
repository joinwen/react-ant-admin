import { Switch, Route } from "react-router-dom";
import NotFound from "../../views/exception/not-found/NotFound";
function WithNotMatch(props) {
  let children = props.children;
  return (
    <Switch>
      {children}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
};
export default WithNotMatch;
