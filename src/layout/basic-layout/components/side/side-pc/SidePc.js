import classnames from "classnames";
import SideLogo from "../side-logo/SideLogo";
import BaseMenu from "../../../../../components/base-menu/BaseMenu";
import { useSelector } from "react-redux";
function SidePc(props) {
  const sideFixed = useSelector(state => state.app.sideFixed);
  return (
    <div className={
      classnames({
        "side-pc": true,
        "side-pc-fixed": sideFixed,
        "side-pc-shrink": props.collapsed
      })
    }>
      <aside className="side-pseudo ease-0.5" />
      <aside className="side-real ease-0.5">
        <SideLogo />
        <BaseMenu collapsed={props.collapsed} />
      </aside>
    </div>
  );
}
export default SidePc;
