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
import generateRoutes from "../../tools/generateRoutes";
import matchRoutes from "../router-config/matchRoutes";
NProgress.configure({ showSpinner: false });
function GuardRoute(props) {
  const location = useLocation(),
    dispatch = useDispatch(),
    title = props.title,
    status = useSelector((state) => state.user.status),
    routes = useSelector((state) => state.router.routes),
    addRoutes = useSelector((state) => state.router.addRoutes);
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
    } else {
      if (addRoutes && addRoutes.length === 0) {
        dispatch(getRoutes());
        dispatch(getMenus());
      }
    }
  } else {
    const matches = matchRoutes(routes, location.pathname),
      match = matches[matches.length - 1];
    if (!match || match.route.isLogin) {
      return (
        <LoadingRedirect to={`${LOGIN_PATH}?redirect=${location.pathname}`} />
      );
    }
  }
  NProgress.done();
  return typeof props.children === "function"
    ? props.children(generateRoutes(routes))
    : props.children;
}
export default GuardRoute;
