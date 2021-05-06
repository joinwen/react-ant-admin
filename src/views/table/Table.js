import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import GuardRoute from "../../router/guard/GuardRoute";
import BasicTable from "./basic-table/BasicTable";
import StepTable from "./step-table/StepTable";
import AdvancedTable from "./advanced-table/AdvancedTable";
function Table() {
  return (
    <WithNotMatchSwitch>
      <GuardRoute path="/table/basic" title="基础表格">
        <WithAuthenticationRoute>
          <BasicTable />
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/table/step" title="分布表格">
        <WithAuthenticationRoute>
          <StepTable />
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/table/advanced" title="高级表格">
        <WithAuthenticationRoute>
          <AdvancedTable />
        </WithAuthenticationRoute>
      </GuardRoute>
    </WithNotMatchSwitch>
  )
};
export default Table;
