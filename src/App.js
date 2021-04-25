import BasicLayout from "./layout/basic-layout/BasicLayout";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router
      keyLength={12}
    >
      <BasicLayout/>
    </Router>
  )
};
export default App;
