import { setDocumentTitle, domTitle } from "../../tools/domUtil";
import { useSelector, useDispatch } from "react-redux";
import isAuthenticated from "../../tools/authenticationUtil";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LoadingRedirect from "../loading-redirect/LoadingRedirect";
import { getPermissions, Logout } from "../../store/user/user";
import { DEFAULT_PATH, LOGIN_PATH } from "../../config/globalConfig";
import { notification } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getMenus } from "../../store/menu/menu";
import { getRoutes } from "../../store/router/router";
NProgress.configure({ showSpinner: false });
function GuardRoute(props) {
  const location = useLocation(),
    dispatch = useDispatch(),
    title = props.title,
    status = useSelector((state) => state.user.status),
    menus = useSelector((state) => state.router.addRoutes);
  if (!props) return null;
  NProgress.start();
  setTimeout(() => {
    setDocumentTitle(title ? `${title}-${domTitle}` : `${domTitle}`);
  });
  if (isAuthenticated()) {
    NProgress.inc(0.1);
    if (location.pathname === LOGIN_PATH || location.pathname === "/") {
      return <Redirect to={DEFAULT_PATH} />;
    }
    if (status !== "fulfilled") {
      if (status === "blocking") {
        dispatch(getPermissions());
        return <LoadingRedirect to={location.pathname} />;
      }
      if (status === "pending") {
        return <LoadingRedirect to={location.pathname} />;
      }
      if (status === "rejected") {
        dispatch(Logout());
        notification.error({
          message: "错误",
          description: "获取用户信息失败",
        });
        return <LoadingRedirect to={LOGIN_PATH} />;
      }
    }
    if (menus && menus.length === 0) {
      dispatch(getRoutes());
      dispatch(getMenus());
    }
  } else {
    if(menus && menus.length == 0 && location.pathname !== LOGIN_PATH) {
      return <LoadingRedirect to={`${LOGIN_PATH}?redirect=${location.pathname}`} />;
    }
  }
  NProgress.done();
  return props.children;
}
export default GuardRoute;
