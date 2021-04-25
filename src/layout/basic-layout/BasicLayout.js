import "./BasicLayout.css";
import React from "react";
import { Layout, Menu } from "antd";
import { Switch, Route,Redirect } from "react-router-dom";
import Home from "../../views/home/Home";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import BaseMenu from "../../components/base-menu/BaseMenu";
import NotFound from "../../views/exception/not-found/NotFound";
import Table from "../../views/table/Table";
import Result from "../../views/result/Result";
import Exception from "../../views/exception/Exception";

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
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" from="/"></Redirect>
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/result">
                <Result />
              </Route>
              <Route path="/exception">
                <Exception />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
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
