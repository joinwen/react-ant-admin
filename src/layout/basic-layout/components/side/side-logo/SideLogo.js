import { useSelector } from "react-redux";
function SideLogo() {
  const collapsed = useSelector(state => state.app.collapsed),
    mobile = useSelector(state => state.app.mobile);
  let imgSrc = require("assets/images/site/logo.png");
  return (
    <figure className="side-logo">
      <img src={imgSrc.default} alt=""/>
      {
        collapsed && !mobile ? null : <span>React Admin</span>
      }
    </figure>
  );
}
export default SideLogo;
