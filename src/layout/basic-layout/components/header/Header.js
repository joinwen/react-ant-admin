import React from "react";
import classnames from "classnames";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
function Header(props) {
  const headerFixed = useSelector((state) => state.app.headerFixed),
    mobile = useSelector((state) => state.app.mobile);
  return (
    <div
      className={classnames({
        header: true,
        "header-grow": props.collapsed,
        "header-fixed": headerFixed,
        "header-mobile": mobile,
      })}
    >
      <header className="header-pseudo" />
      <header className="header-real">
        <div className="header-left">
          {React.createElement(
              props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: props.toggle,
              }
          )}
        </div>
        <div className="header-centre"></div>
        <div className="header-right">
          <Button onClick={props.handleLogout}>退出</Button>
          <span className="m-x-1">{props.nickname}</span>
        </div>
      </header>
    </div>
  );
}
export default Header;
