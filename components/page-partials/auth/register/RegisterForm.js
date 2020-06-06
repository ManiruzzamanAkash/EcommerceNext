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
import { registerAction } from "../../../../store/actions/auth/RegisterAction";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitRegister = (registerData) => {
    dispatch(registerAction(registerData));
  };

  const isLoadingRegister = useSelector(
    (state) => state.auth.isLoadingRegister
  );
  const registerMessage = useSelector((state) => state.auth.registerMessage);
  const registrationStatus = useSelector(
    (state) => state.auth.registrationStatus
  );
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (registrationStatus && registerMessage.length > 0) {
      const key = "registerNotification";
      const placement = "bottomTop";
      notification["success"]({
        key,
        message: "Sign Up Success",
        description: registerMessage,
        placement,
        duration: 1.5,
      });
    }

    if (isLoggedIn) {
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
  }, [isLoggedIn, registrationStatus, registerMessage]);

  return (
    <>
      <Row justify={"center"}>
        <Col span={12} lg={12} sm={24} xs={24}>
          <Card>
            <Title level={3}>Sign Up</Title>
            <Divider />

            {!isLoggedIn && registerMessage.length > 0 && (
              <>
                <Alert
                  message={registerMessage}
                  type="error"
                  closable
                  showIcon
                />
                <br />
              </>
            )}

            {isLoggedIn && registerMessage.length > 0 && (
              <>
                <Alert
                  message={registerMessage}
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
              onFinish={submitRegister}
            >
              <Form.Item
                label="First Name"
                name="first_name"
                hasFeedback
                rules={[
                  { whitespace: true, message: "" },
                  {
                    max: 30,
                    message:
                      "Please give your first name between 30 characters !",
                  },
                  {
                    min: 3,
                    message:
                      "Please give your first name minimum of 3 characters !",
                  },
                  {
                    required: true,
                    message: "Please give your first name !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="last_name"
                hasFeedback
                rules={[
                  { whitespace: true, message: "" },
                  {
                    max: 20,
                    message:
                      "Please give your last name between 20 characters !",
                  },
                  {
                    min: 3,
                    message:
                      "Please give your last name minimum of 3 characters !",
                  },
                  {
                    required: true,
                    message: "Please give your last name !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                hasFeedback
                rules={[
                  { whitespace: true, message: "" },
                  {
                    type: "email",
                    message: "Please give a valid email address !",
                  },
                  {
                    required: true,
                    message: "Please give your email address !",
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
                  // {
                  //   pattern: new RegExp(
                  //     "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$"
                  //   ),
                  //   message:
                  //     "8 characters length, 1 letter in Upper Case, 1 Special Character (!@#$&*), 2 numerals (0-9), 1 letters in Lower Case",
                  // },
                  {
                    max: 50,
                    message:
                      "Please give your password between 50 characters !",
                  },
                  {
                    min: 6,
                    message:
                      "Please give your password minimum of 6 characters !",
                  },
                  { required: true, message: "Please give your password !" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="password_confirmation"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please give your confirm password !",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        "Password and confirm password doesn't match !"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="terms"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Read and Check Terms and Service",
                  },
                ]}
                valuePropName="checked"
              >
                <Checkbox>
                  I'm agree with{" "}
                  <Link href="/terms-and-service">
                    <a target="_blank">Terms and Service</a>
                  </Link>
                </Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isLoadingRegister}
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>

            <div>
              <Link href="/login">
                <a className="text-success">
                  Already have an account ? Sign In Now
                </a>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RegisterForm;
