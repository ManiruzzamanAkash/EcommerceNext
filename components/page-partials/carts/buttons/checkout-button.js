import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const CheckoutButton = (props) => {
  const { carts } = props;
  return (
    <>
      {carts.length > 0 && (
        <Link href="/checkout">
          <a>
            <Button
              type="primary"
              title="Continue Checkout"
              className="buttonMinified"
              shape="round"
            >
              Checkout Now
              <ArrowRightOutlined />
            </Button>
          </a>
        </Link>
      )}
    </>
  );
};

export default CheckoutButton;
