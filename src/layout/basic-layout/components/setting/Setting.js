import { Drawer, Tooltip, Switch, Divider } from "antd";
import { SketchPicker } from "react-color";
import { useState } from "react";
function Setting({ visible, handleClose, children, ...props }) {
  const triggerStyle = {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
  };
  const [color, setColor] = useState("#fff");
  const handleColorChange = (color) => {
    setColor(color);
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
          <span className="m-r-0.5">
            <Tooltip title="亮色模式">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"
                alt=""
              />
            </Tooltip>
          </span>
          <span className="m-l-0.5">
            <Tooltip title="暗色模式">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"
                alt=""
              />
            </Tooltip>
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">导航模式</h2>
          <span className="m-r-0.5">
            <Tooltip title="侧边导航">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"
                alt=""
              />
            </Tooltip>
          </span>
          <span className="m-l-0.5">
            <Tooltip title="顶部导航">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                alt=""
              />
            </Tooltip>
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">视觉模式</h2>
          <span>
            <span>夜间模式</span>
            <Switch className="fr" />
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">主题色</h2>
          <span>
            <SketchPicker color={color} onChangeComplete={handleColorChange} />
          </span>
          <Divider />
        </div>
        <div>
          <h2 className="fs-md fw-medium m-y-1">内容区域</h2>
          <div className="m-b-0.5">
            <span>固定 Header </span>
            <Switch className="fr" />
          </div>
          <div>
            <span>固定侧边栏</span>
            <Switch className="fr" />
          </div>
        </div>
      </Drawer>
      <div style={{ ...triggerStyle }}>{children}</div>
    </>
  );
}
export default Setting;
