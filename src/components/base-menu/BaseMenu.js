// import menuConfig from "../../config/menuConfig";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
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
      <Menu.Item key={path} title={name} icon={<BaseIcon name={icon} />}>
        <Link to={path}>{name}</Link>
      </Menu.Item>
    );
  }
  if (hidden) {
    comp = null;
  }
  return comp;
}


function BaseMenu() {
  const menuConfig = useSelector((state) => state.menu.menus);
  const rootSubmenuKeys = menuConfig.filter(item => {
    if(item.children && item.children.length > 0)
      return true
  }).map(item => item.path);
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState([location.pathname.match(/^(\/\w*)\/?/)[1]]);

  const handleOpenChange = (keys) => {
    debugger;
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  return (
    <Menu
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={[location.pathname]}
      theme="dark"
      mode="inline"
    >
      {menuConfig.map((menu) => MenuItem(menu))}
    </Menu>
  );
}
export default BaseMenu;
