import loadable from "@loadable/component";

const constantRoutes = [
  {
    path: "/login",
    component: "private/login/Login",
    title: "登录",
  },
];
/**
 * 异步路由
 * 1. 前端配置路由，用到此配置
 * 2. 后端生成路由，不用此配置
 */
const asyncRoutes = [];
export { constantRoutes, asyncRoutes };
