import { Breadcrumb } from "antd";
import matchRoutes from "../../router/router-config/matchRoutes";
import {
  useLocation
} from "react-router-dom";
import { useSelector } from "react-redux";

function BaseBreadcrumb(props) {
  const location = useLocation(),
      routes = useSelector(state => state.router.routes),
      branch = [];
  matchRoutes(routes, location.pathname, branch);
  console.log(branch);
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a>Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a>Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default BaseBreadcrumb;
