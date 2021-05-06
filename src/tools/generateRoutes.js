import loadable from "@loadable/component";
import BasicLayout from "../layout/basic-layout/BasicLayout";
import UserLayout from "../layout/user-layout/UserLayout";
import BlankLayout from "../layout/blank-layout/BlankLayout";
const STATIC_COMPS = {
  "BasicLayout": BasicLayout,
  "UserLayout": UserLayout,
  "BlankLayout": BlankLayout,
};
function generateRoutes(routes) {
  routes = JSON.parse(JSON.stringify(routes));
  return routes.map((route) => {
    let name = route.component;
    if(Object.keys(STATIC_COMPS).includes(name)) {
      route.component = STATIC_COMPS[name];
    } else {
      name && (route.component = loadable(() => import(`views/${name}`)));
    }
    if(route.children && route.children.length != 0) {
      route.children = generateRoutes(route.children);
    }
    return route;
  });
}
export default generateRoutes;
