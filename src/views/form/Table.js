import WithNotMatchSwitch from "../../router/not-match/WithNotMatchSwitch";
import WithAuthenticationRoute from "../../router/authentication/WithAuthenticationRoute";
import GuardRoute from "../../router/guard/GuardRoute";
import BasicTable from "./basic-form/BasicForm";
import StepForm from "./step-form/StepForm";
import AdvancedForm from "./advanced-form/AdvancedForm";
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
          <StepForm />
        </WithAuthenticationRoute>
      </GuardRoute>
      <GuardRoute path="/table/advanced" title="高级表格">
        <WithAuthenticationRoute>
          <AdvancedForm />
        </WithAuthenticationRoute>
      </GuardRoute>
    </WithNotMatchSwitch>
  )
};
export default Table;
