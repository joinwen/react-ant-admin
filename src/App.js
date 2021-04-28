import BasicLayout from "./layout/basic-layout/BasicLayout";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import WithNotMatchSwitch from "./router/not-match/WithNotMatchSwitch";
import WithAuthorizationRoute from "./router/authorization/WithAuthorizationRoute";
import Home from "./views/home/Home";
import Table from "./views/table/Table";
import Result from "./views/result/Result";
import Exception from "./views/exception/Exception";
import UserLayout from "./layout/user-layout/UserLayout";
import Login from "./views/private/login/Login";
import WithAuthenticationRoute from "./router/authentication/WithAuthenticationRoute";
import GuardRoute from "./router/guard/GuardRoute";
function App() {
  return (
    <Router
      keyLength={12}
    >
      <WithNotMatchSwitch>
        <GuardRoute>
          <WithAuthorizationRoute exact path="/">
            <Redirect to="/home" from="/"></Redirect>
          </WithAuthorizationRoute>
          <WithAuthorizationRoute path="/login">
            <UserLayout>
              <Login />
            </UserLayout>
          </WithAuthorizationRoute>
          <WithAuthenticationRoute permissions="home" path="/home">
            <BasicLayout>
              <Home />
            </BasicLayout>
          </WithAuthenticationRoute>
          <WithAuthorizationRoute permissions="home2" path="/table">
            <BasicLayout>
              <Table />
            </BasicLayout>
          </WithAuthorizationRoute>
          <WithAuthorizationRoute path="/result">
            <BasicLayout>
              <Result />
            </BasicLayout>
          </WithAuthorizationRoute>
          <WithAuthorizationRoute permissions="exception" path="/exception">
            <BasicLayout>
              <Exception />
            </BasicLayout>
          </WithAuthorizationRoute>
        </GuardRoute>
      </WithNotMatchSwitch>
    </Router>
  )
};
export default App;
