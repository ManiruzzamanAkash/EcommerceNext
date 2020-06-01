import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

import Title from "antd/lib/typography/Title";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Col,
  Row,
  Card,
  Divider,
  notification,
  Alert,
} from "antd";
import Link from "next/link";
import {
  loginAction,
  getAuthData,
} from "../../../../store/actions/auth/LoginAction";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const submitLogin = (loginData) => {
    dispatch(loginAction(loginData));
  };

  const isLoading = useSelector((state) => state.auth.isLoading);
  const loginMessage = useSelector((state) => state.auth.loginMessage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    // dispatch(getAuthData());
    if (isLoggedIn) {
      const key = "loginNotification";
      const placement = "bottomTop";
      notification["success"]({
        key,
        message: "Login Success",
        description: loginMessage,
        placement,
        duration: 1.5,
      });

      // Redirect to local storage Redirected_URL or HomePage
      const redirected_route = localStorage.getItem("redirected_route");
      if (
        redirected_route != null &&
        redirected_route != "" &&
        typeof redirected_route !== "undefined"
      ) {
        localStorage.setItem("redirected_route", "");
        Router.replace(redirected_route);
      } else {
        Router.replace("/");
      }
    }
  }, [isLoggedIn]);

  return (
    <>
      <Row justify={"center"}>
        <Col span={12} lg={12} sm={24} xs={24}>
          <Card>
            <Title level={3}>Login Now</Title>
            <Divider />

            {!isLoggedIn && loginMessage.length > 0 && (
              <>
                <Alert message={loginMessage} type="error" closable showIcon />
                <br />
              </>
            )}

            {isLoggedIn && loginMessage.length > 0 && (
              <>
                <Alert
                  message={loginMessage}
                  type="success"
                  closable
                  showIcon
                />
                <br />
              </>
            )}

            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={submitLogin}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username/Email"
                name="username"
                hasFeedback
                rules={[
                  { whitespace: true, message: "" },
                  {
                    required: true,
                    message: "Please give your username or email address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: "Please give your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Sign In
                </Button>
              </Form.Item>
            </Form>

            <div>
              <Link href="/sign-up">
                <a className="text-success">
                  Don't have an account yet ? Register Now
                </a>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
