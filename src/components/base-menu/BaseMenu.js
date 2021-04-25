import menuConfig from "../../config/menuConfig";
import BaseIcon from "../base-icon/BaseIcon";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

function MenuItem(props) {
  let { hidden, name, icon, path, children } = props,
    comp = null;
  if (children && children.length > 0) {
    comp = (
      <SubMenu key={path} icon={<BaseIcon name={icon} />} title={name}>
        {props.children.map((item) => MenuItem(item))}
      </SubMenu>
    );
  } else {
    comp = (
      <Menu.Item key={path} icon={<BaseIcon name={icon} />}>
        <Link to={path}>{ name }</Link>
      </Menu.Item>
    );
  }
  if (hidden) {
    comp = null;
  }
  return comp;
}

function BaseMenu() {
  return (
    <Menu theme="dark" mode="inline">
      {menuConfig.map((menu) => MenuItem(menu))}
    </Menu>
  );
}
export default BaseMenu;
