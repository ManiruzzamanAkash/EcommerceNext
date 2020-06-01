import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

const ShoppingButton = () => {
  return (
    <Link href="/">
      <a>
        <Button
          type="ghost"
          title="Continue Checkout"
          className="buttonMinified m-1"
          shape="round"
        >
          <ArrowLeftOutlined />
          Continue Shopping
        </Button>
      </a>
    </Link>
  );
};

export default ShoppingButton;
