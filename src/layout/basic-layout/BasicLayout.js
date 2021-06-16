import React from "react";
import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SET_COLLAPSED } from "../../store/app/app";
import { Logout } from "../../store/user/user";
import SideMobile from "./components/side/side-mobile/SideMobile";
import SidePc from "./components/side/side-pc/SidePc";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Setting from "./components/setting/Setting";
class BasicLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }
  handleOpenSetting = () => {
    this.setState({
      visible: true,
    });
  };
  handleCloseSetting = () => {
    this.setState({
      visible: false,
    });
  };
  toggle = () => {
    this.props.SET_COLLAPSED(!this.props.collapsed);
  };
  handleLogout = () => {
    this.props.Logout().then((res) => {
      window.location.reload();
    });
  };
  render() {
    return (
      <>
        <section id="basic-layout">
          {this.props.mobile ? (
            <SideMobile />
          ) : (
            <SidePc collapsed={this.props.collapsed} />
          )}
          <section className="section">
            <Header
              toggle={this.toggle}
              handleLogout={this.handleLogout}
              {...this.props}
            />
            <Main children={this.props.children} />
            <Footer />
          </section>
        </section>
        <Setting
          visible={this.state.visible}
          handleClose={this.handleCloseSetting}
        >
          <Button type="primary" onClick={this.handleOpenSetting} icon={<SettingOutlined />} />
        </Setting>
      </>
    );
  }
}
export default connect(
  (state) => {
    return {
      collapsed: state.app.collapsed,
      nickname: state.user.nickname,
      mobile: state.app.mobile,
    };
  },
  { SET_COLLAPSED, Logout }
)(BasicLayout);
