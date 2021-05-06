import { Switch, Route } from "react-router-dom";
import NotFound from "../../views/exception/not-found/NotFound";
function WithNotMatchSwitch({children, ...rest }) {
  return (
    <Switch {...rest}>
      {children}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
};
export default WithNotMatchSwitch;
