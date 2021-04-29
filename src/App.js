import BasicLayout from "./layout/basic-layout/BasicLayout";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import WithNotMatchSwitch from "./router/not-match/WithNotMatchSwitch";
import Home from "./views/home/Home";
import Table from "./views/table/Table";
import Result from "./views/result/Result";
import Exception from "./views/exception/Exception";
import UserLayout from "./layout/user-layout/UserLayout";
import Login from "./views/private/login/Login";
import WithAuthenticationRoute from "./router/authentication/WithAuthenticationRoute";
import GuardRoute from "./router/guard/GuardRoute";
import WithAuthorizationRoute from "./router/authorization/WithAuthorizationRoute";
function App() {
  return (
    <Router keyLength={12} basename="/react-ant-admin">
      <WithNotMatchSwitch>
        <GuardRoute exact path="/">
          <Redirect to="/home" from="/" />
        </GuardRoute>
        <GuardRoute path="/login" title="登录">
          <UserLayout>
            <Login />
          </UserLayout>
        </GuardRoute>
        <GuardRoute path="/home" title="主页">
          <WithAuthenticationRoute>
            <WithAuthorizationRoute>
              <BasicLayout>
                <Home />
              </BasicLayout>
            </WithAuthorizationRoute>
          </WithAuthenticationRoute>
        </GuardRoute>
        <GuardRoute path="/table" title="表格">
          <WithAuthenticationRoute>
            <BasicLayout>
              <Table />
            </BasicLayout>
          </WithAuthenticationRoute>
        </GuardRoute>
        <GuardRoute path="/result" title="结果页">
          <WithAuthenticationRoute>
            <BasicLayout>
              <Result />
            </BasicLayout>
          </WithAuthenticationRoute>
        </GuardRoute>
        <GuardRoute path="/exception" title="异常页">
          <WithAuthenticationRoute>
            <BasicLayout>
              <Exception />
            </BasicLayout>
          </WithAuthenticationRoute>
        </GuardRoute>
      </WithNotMatchSwitch>
    </Router>
  );
}
export default App;
