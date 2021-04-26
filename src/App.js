import BasicLayout from "./layout/basic-layout/BasicLayout";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Table from "./views/table/Table";
import Result from "./views/result/Result";
import Exception from "./views/exception/Exception";
import NotFound from "./views/exception/not-found/NotFound";
import UserLayout from "./layout/user-layout/UserLayout";
import Login from "./views/private/login/Login";
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
        <Route path="/home">
          <BasicLayout>
            <Home />
          </BasicLayout>
        </Route>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
};
export default App;
