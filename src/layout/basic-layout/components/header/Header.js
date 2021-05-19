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
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: props.toggle,
          }
        )}
        <Button onClick={props.handleLogout}>退出</Button>
        <span className="fr m-r-2">{props.nickname}</span>
      </header>
    </div>
  );
}
export default Header;
