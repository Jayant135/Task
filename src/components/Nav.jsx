import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
function Nav() {
  return (
    <div className="container-fluid">
      <div
        className="header"
        style={{ boxShadow: "0 8px 2px -2px smokewhite" }}
      >
        <div className="logo">ATools</div>
        <div className="mobileHidden">
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item
              key="1"
              style={{
                background: "#5e7e94",
                color: "white",
                padding: "5px",
                margin: "0 3px",
              }}
            >
              Start Free Trial
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                background: "green",
                color: "white",
                padding: "5px",
                margin: "0 3px",
              }}
            >
              Login
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Nav;
