import { Breadcrumb } from "antd";
import { useRouteMatch, useLocation, useHistory, withRouter } from "react-router-dom";
function BaseBreadcrumb(props) {
  const match = useRouteMatch(),
    location = useLocation(),
    history = useHistory();
  console.log(match);
  console.log(location);
  console.log(history);
  console.log(props);
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default withRouter(BaseBreadcrumb);
