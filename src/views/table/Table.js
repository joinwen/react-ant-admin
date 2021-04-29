import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import GuardRoute from "../../router/guard/GuardRoute";
function Table() {
  return (
    <WithNotMatchSwitch>
      <GuardRoute path="/table/basic" title="基础表格">
        <WithAuthenticationRoute>
          <h2>基础表格</h2>
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/table/step" title="分布表格">
        <WithAuthenticationRoute>
          <h2>分步表格</h2>
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/table/advanced" title="高级表格">
        <WithAuthenticationRoute>
          <h2>高级表格</h2>
        </WithAuthenticationRoute>
      </GuardRoute>
    </WithNotMatchSwitch>
  )
};
export default Table;
