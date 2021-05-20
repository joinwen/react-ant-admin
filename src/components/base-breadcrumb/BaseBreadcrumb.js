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
  return (
    <Breadcrumb>
      {
        branch.map((item,index) => {
          return (
            <Breadcrumb.Item key={index}>{item.route.title}</Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  );
}
export default BaseBreadcrumb;
