import { setDocumentTitle, domTitle } from "../../tools/domUtil";
import { useSelector, useDispatch } from "react-redux";
import isAuthenticated from "../../tools/authenticationUtil";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LoadingRedirect from "../loading-redirect/LoadingRedirect";
import { getPermissions } from "../../store/permission/permission";
import { DEFAULT_PATH, LOGIN_PATH } from "../../config/globalConfig";
import { notification } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });
function GuardRoute(props) {
  NProgress.start();
  const location = useLocation(),
    dispatch = useDispatch(),
    title = props.title,
    status = useSelector((state) => state.permission.status);
  setTimeout(() => {
    setDocumentTitle(`${title}-${domTitle}`);
  });
  if (isAuthenticated()) {
    if (location.pathname === LOGIN_PATH) {
      return <Redirect to={DEFAULT_PATH} />;
    }
    debugger;
    if (status !== "fulfilled") {
      if(status === "blocking") {
        dispatch(getPermissions());
        return <LoadingRedirect to={location.pathname} />;
      }
      if(status === "pending") {
        return <LoadingRedirect to={location.pathname} />;
      }
      if(status === "rejected") {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      }
    }
  }
  NProgress.done();
  return props.children;
}
export default GuardRoute;
