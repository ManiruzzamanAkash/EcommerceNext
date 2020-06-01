import * as React from "react";
import { Row, Col, Typography, Divider, Card, notification, Input } from "antd";
const { Search } = Input;

const checkCoupon = (code) => {
  console.log("code", code);
};
const CheckCoupon = () => {
  return (
    <Search
      placeholder="Enter Coupon Code"
      enterButton="Check"
      size="small"
      onSearch={(code) => checkCoupon(code)}
    />
  );
};

export default CheckCoupon;
