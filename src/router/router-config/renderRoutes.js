import WithNotMatchSwitch from "../not-match/WithNotMatchSwitch";
import GuardRoute from "../guard/GuardRoute";
import WithAuthenticationRoute from "../authentication/WithAuthenticationRoute";
import WithAuthorizationRoute from "../authorization/WithAuthorizationRoute";
import BasicLayout from "../../layout/basic-layout/BasicLayout";
import loadable from "@loadable/component";
import BlankLayout from "../../layout/blank-layout/BlankLayout";
function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <WithNotMatchSwitch {...switchProps}>
      {routes.map(({ component: Component, ...route }, i) => (
        <GuardRoute key={i} {...route}>
          <WithAuthenticationRoute meta={route.meta}>
            <WithAuthorizationRoute meta={route.meta}>
              <Component>
                {renderRoutes(route.children, extraProps, switchProps)}
              </Component>
            </WithAuthorizationRoute>
          </WithAuthenticationRoute>
        </GuardRoute>
      ))}
    </WithNotMatchSwitch>
  ) : null;
}
export default renderRoutes;
export const json = [
  {
    path: "/login",
    component: loadable(() => import("../../views/private/login/Login")),
    title: "登录",
  },
  {
    path: "/",
    redirect: "/home",
    component: BasicLayout,
    meta: {
      isLogin: true
    },
    children: [
      {
        path: "/home",
        component: loadable(() => import("views/home/Home")),
        title: "首页",
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/table",
        component: BlankLayout,
        title: "表格",
        meta: {
          isLogin: true,
        },
        children: [
          {
            path: "/table/basic",
            component: loadable(() =>
              import("views/table/basic-table/BasicTable")
            ),
            title: "基础表格",
            meta: {
              isLogin: true,
            },
          },
          {
            path: "/table/step",
            component: loadable(() =>
              import("views/table/step-table/StepTable")
            ),
            title: "分步表格",
            meta: {
              isLogin: true,
            },
          },
          {
            path: "/table/advanced",
            component: loadable(() =>
              import("views/table/advanced-table/AdvancedTable")
            ),
            title: "高级表格",
            meta: {
              isLogin: true,
            },
          },
        ],
      },
    ],
  }
];
