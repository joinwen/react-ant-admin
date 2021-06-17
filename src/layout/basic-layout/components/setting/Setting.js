import { Drawer, Tooltip, Switch, Divider, Button } from "antd";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_VISUAL_MODE,
  SET_COLOR,
  SET_HEADER_FIXED,
  SET_SIDE_FIXED,
  SET_GLOBAL_STYLE,
  SET_NAV_DIRECTION,
} from "store/app/app";
import { changeNightMode, changeThemeColor } from "../../../../tools/themeUtil";

function Setting({ visible, handleClose, children, ...props }) {
  const triggerStyle = {
    position: "fixed",
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
  };
  const handleColorChange = (color) => {
    dispatch(SET_COLOR(color));
    changeThemeColor(color);
  };
  const dispatch = useDispatch();
  const navDirection = useSelector((state) => state.app.navDirection);
  const globalStyle = useSelector((state) => state.app.globalStyle);
  const visualMode = useSelector((state) => state.app.visualMode);
  const color = useSelector((state) => state.app.color);
  const sFixed = useSelector((state) => state.app.sideFixed);
  const tFixed = useSelector((state) => state.app.headerFixed);
  const handleVisualModeChange = (val) => {
    dispatch(SET_VISUAL_MODE(val));
    changeNightMode(val);
  };
  const handleSideFixedChange = (val) => {
    dispatch(SET_SIDE_FIXED(val));
  };
  const handleHeaderFixedChange = (val) => {
    dispatch(SET_HEADER_FIXED(val));
  };
  const handleNavDirectionChange = (e, val) => {
    dispatch(SET_NAV_DIRECTION(val));
  };
  const handleGlobalStyleChange = (e, val) => {
    dispatch(SET_GLOBAL_STYLE(val));
  };
  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={handleClose}
        visible={visible}
        {...props}
      >
        <div>
          <h2 className="fs-md fw-medium m-y-1">整体风格设置</h2>
          <span className="m-r-0.5 rl">
            <Tooltip title="亮色模式">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"
                onClick={(e) => handleGlobalStyleChange(e, 1)}
                className="cursor"
                alt="亮色模式"
              />
            </Tooltip>
            {globalStyle === 1 ? (
              <span className="ab ab-center events-none">√</span>
            ) : null}
          </span>
          <span className="m-l-0.5 rl">
            <Tooltip title="暗色模式">
              <img
                className="cursor"
                src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"
                onClick={(e) => handleGlobalStyleChange(e, 2)}
                alt="暗色模式"
              />
            </Tooltip>
            {globalStyle === 2 ? (
              <span className="ab ab-center events-none">√</span>
            ) : null}
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">导航模式</h2>
          <span className="m-r-0.5 rl">
            <Tooltip title="侧边导航">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"
                onClick={(e) => handleNavDirectionChange(e, 1)}
                className="cursor"
                alt="侧边导航"
              />
            </Tooltip>
            {navDirection === 1 ? (
              <span className="ab ab-center events-none">√</span>
            ) : null}
          </span>
          <span className="m-l-0.5 rl">
            <Tooltip title="顶部导航">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                onClick={(e) => handleNavDirectionChange(e, 2)}
                className="cursor"
                alt="顶部导航"
              />
            </Tooltip>
            {navDirection === 2 ? (
              <span className="ab ab-center events-none">√</span>
            ) : null}
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">视觉模式</h2>
          <span>
            <span>夜间模式</span>
            <Switch
              checked={visualMode}
              onChange={handleVisualModeChange}
              className="fr"
            />
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">主题色</h2>
          <span>
            <SketchPicker color={color} onChangeComplete={handleColorChange}>
              <Button>确定</Button>
            </SketchPicker>
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">内容区域</h2>
          <div className="m-b-0.5">
            <span>固定 Header </span>
            <Switch
              checked={tFixed}
              onChange={handleHeaderFixedChange}
              className="fr"
            />
          </div>
          <div>
            <span>固定侧边栏</span>
            <Switch
              checked={sFixed}
              onChange={handleSideFixedChange}
              className="fr"
            />
          </div>
        </div>
      </Drawer>
      <div style={{ ...triggerStyle }}>{children}</div>
    </>
  );
}
export default Setting;
