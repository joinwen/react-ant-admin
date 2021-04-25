import { Route,Switch } from "react-router-dom";
function Table() {
  return (
    <Switch>
      <Route path="/table/basic">
        <h2>基础表格</h2>
      </Route>
      <Route path="/table/step">
        <h2>分步表格</h2>
      </Route>
      <Route path="/table/advanced">
        <h2>高级表格</h2>
      </Route>
    </Switch>
  )
};
export default Table;
