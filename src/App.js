import { BrowserRouter as Router } from "react-router-dom";
import GuardRoute from "./router/guard/GuardRoute";
import renderRoutes from "./router/router-config/renderRoutes";
import { useSelector } from "react-redux";
import generateRoutes from "./tools/generateRoutes";
function App() {
  const routes = useSelector((state) => state.router.routes);
  let res = renderRoutes(generateRoutes(routes));
  return (
    <Router keyLength={12} basename="/react-ant-admin">
      <GuardRoute> {res} </GuardRoute>
    </Router>
  );
}
export default App;
