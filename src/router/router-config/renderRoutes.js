import GuardRoute from "../guard/GuardRoute";
import WithNotMatchSwitch from "../not-match/WithNotMatchSwitch";
import WithAuthorizationRoute from "../authorization/WithAuthorizationRoute";
import WithAuthenticationRoute from "../authentication/WithAuthenticationRoute";

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
