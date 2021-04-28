import "./BasicLayout.css";
import React from "react";
import { Layout,Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import BaseMenu from "../../components/base-menu/BaseMenu";
const { Header, Sider, Content, Footer } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleLogout = () => {
    console.log(this.props);
    localStorage.clear();
    window.history.go(0);
  };

  render() {
    return (
      <Layout
        id="components-layout-demo-custom-trigger"
        className="site-layout"
      >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <BaseMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <Button onClick={this.handleLogout}>退出</Button>
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
export default BasicLayout;
