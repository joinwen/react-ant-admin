import { setDocumentTitle, domTitle } from "../../tools/domUtil";
import { useSelector, useDispatch } from "react-redux";
import isAuthenticated from "../../tools/authenticationUtil";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LoadingRedirect from "../loading-redirect/LoadingRedirect";
import {getPermissions, Logout, SET_STATUS} from "../../store/user/user";
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
    status = useSelector((state) => state.user.status);
  setTimeout(() => {
    setDocumentTitle(`${title}-${domTitle}`);
  });
  if (isAuthenticated()) {
    if (location.pathname === LOGIN_PATH) {
      return <Redirect to={DEFAULT_PATH} />;
    }
    if (status !== "fulfilled") {
      if(status === "blocking") {
        dispatch(getPermissions());
        return <LoadingRedirect to={location.pathname} />;
      }
      if(status === "pending") {
        return <LoadingRedirect to={location.pathname} />;
      }
      if(status === "rejected") {
        dispatch(Logout());
        notification.error({
          message: '错误',
          description:
              '获取用户信息失败',
        });
        return <LoadingRedirect to={LOGIN_PATH} />
      }
    }
  }
  NProgress.done();
  return props.children;
}
export default GuardRoute;
