import "./BasicLayout.css";
import React from "react";
import { connect } from "react-redux";
import { SET_COLLAPSED } from "../../store/app/app";
import { Logout } from "../../store/user/user";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import BaseMenu from "../../components/base-menu/BaseMenu";
const { Header, Sider, Content, Footer } = Layout;

class BasicLayout extends React.Component {
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
      <Layout
        id="components-layout-demo-custom-trigger"
        className="site-layout"
      >
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <BaseMenu collapsed={this.props.collapsed} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <Button onClick={this.handleLogout}>退出</Button>
            <span className="fr m-r-2">{this.props.nickname}</span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React Admin ©2021 flywen.top
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default connect(
  (state) => {
    return { collapsed: state.app.collapsed, nickname: state.user.nickname };
  },
  { SET_COLLAPSED, Logout }
)(BasicLayout);
