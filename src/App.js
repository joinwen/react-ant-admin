import BasicLayout from "./layout/basic-layout/BasicLayout";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Table from "./views/table/Table";
import Result from "./views/result/Result";
import Exception from "./views/exception/Exception";
import NotFound from "./views/exception/not-found/NotFound";
import UserLayout from "./layout/user-layout/UserLayout";
import Login from "./views/private/login/Login";
import WithAuthenticationRoute from "./router/authentication/WithAuthenticationRoute";
function App() {
  return (
    <Router
      keyLength={12}
    >
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" from="/"></Redirect>
        </Route>
        <Route path="/login">
          <UserLayout>
            <Login />
          </UserLayout>
        </Route>
        <WithAuthenticationRoute path="/home">
          <BasicLayout>
            <Home />
          </BasicLayout>
        </WithAuthenticationRoute>
        <Route path="/table">
          <BasicLayout>
            <Table />
          </BasicLayout>
        </Route>
        <Route path="/result">
          <BasicLayout>
            <Result />
          </BasicLayout>
        </Route>
        <Route path="/exception">
          <BasicLayout>
            <Exception />
          </BasicLayout>
        </Route>
        <WithAuthenticationRoute path="*">
          <NotFound />
        </WithAuthenticationRoute>
      </Switch>
    </Router>
  )
};
export default App;
