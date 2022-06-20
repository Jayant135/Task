import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Typography, Row, Col } from "antd";
const { Title } = Typography;
/* eslint-disable import/first */
function Login() {
  const [status, setStatus] = useState("");
  const onFinish = (e) => {
    console.log(e);
    axios
      .post("https://regres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "5cityslicka",
      })
      .then(function (response) {
        console.log(response);
        if (!response.token) setStatus(<p>Success</p>);
        else setStatus(<p>Error: {response.error}</p>);
        console.log(status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ width: "100vw", padding: "0px" }}>
      <Row gutter={[8, 8]}>
        <Col
          flex={1}
          style={{
            alignContent: "center",
            justifyContent: "center",
            height: "90vh",
            flexShrink: "-10",
          }}
        >
          <Form
            className="login-form"
            style={{ marginTop: "50%", textAlign: "center" }}
            onFinish={onFinish}
          >
            <Form.Item style={{ margin: "0" }}>
              <Title level={2} type="strong">
                Welcome Back
              </Title>
            </Form.Item>
            <Form.Item
              style={{
                margin: "0",
                marginTop: "-20px",
                marginBottom: "20px",
              }}
            >
              <Title
                level={5}
                style={{
                  fontSize: "12px",
                  fontWeight: "0",
                }}
              >
                Sub-title text goes here.
              </Title>
            </Form.Item>
            <Form.Item
              style={{ margin: "1px 20px ", padding: "0 60px" }}
              name="emailAddress"
            >
              <Input placeholder="Email Address*" required></Input>
            </Form.Item>
            <Form.Item
              style={{ margin: "1px 20px", padding: "0 60px" }}
              name="password"
            >
              <Input.Password placeholder="Password*" required></Input.Password>
            </Form.Item>
            <Form.Item style={{ margin: "2px 20px", padding: "0 60px" }}>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <Form.Item style={{ margin: "5px" }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a
                className="login-form-forgot"
                style={{ marginInline: "20px" }}
                href="/"
              >
                Forgot password
              </a>
            </Form.Item>
          </Form>
        </Col>
        <Col
          flex={8}
          style={{ background: "#5e7e94", flexShrink: "100" }}
        ></Col>
      </Row>
    </div>
  );
}

export default Login;
