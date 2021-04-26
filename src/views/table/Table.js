import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
function Table() {
  return (
    <WithNotMatchSwitch>
      <WithAuthenticationRoute path="/table/basic">
        <h2>基础表格</h2>
      </WithAuthenticationRoute>
      <WithAuthenticationRoute path="/table/step">
        <h2>分步表格</h2>
      </WithAuthenticationRoute>
      <WithAuthenticationRoute path="/table/advanced">
        <h2>高级表格</h2>
      </WithAuthenticationRoute>
    </WithNotMatchSwitch>
  )
};
export default Table;
