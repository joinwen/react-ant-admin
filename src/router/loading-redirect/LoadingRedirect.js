import "./LoadingRedirect.scss";
import { Redirect } from "react-router-dom";
import { Spin } from "antd";
function LoadingRedirect(props) {
  return (
    <div className="Loading-Redirect">
      <Redirect {...props } />
      <Spin className="spin" size="large" />
    </div>
  )
};
export default LoadingRedirect;
