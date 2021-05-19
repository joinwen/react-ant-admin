import { Drawer } from "antd";
import BaseMenu from "../../../../../components/base-menu/BaseMenu";
import SideLogo from "../side-logo/SideLogo";
import { useSelector, useDispatch } from "react-redux";
import { SET_COLLAPSED } from "store/app/app";
function SideMobile() {
  const dispatch = useDispatch();
  let collapsed = useSelector(state => state.app.collapsed);
  const onClose = () => {
    dispatch(SET_COLLAPSED(false));
  };
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      visible={collapsed}
    >
      <SideLogo />
      <BaseMenu />
    </Drawer>
  );
}
export default SideMobile;
