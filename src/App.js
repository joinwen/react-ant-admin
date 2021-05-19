import { BrowserRouter as Router } from "react-router-dom";
import GuardRoute from "./router/guard/GuardRoute";
import renderRoutes from "./router/router-config/renderRoutes";
function App() {
  return (
    <Router keyLength={12} basename="/react-ant-admin">
      <GuardRoute children={(routes) => renderRoutes(routes)} />
    </Router>
  );
}
export default App;
