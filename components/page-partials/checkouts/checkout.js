import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Typography,
  Divider,
  Card,
  notification,
  Button,
} from "antd";
import CartItemList from "../carts/cart-list/item-list";
import calculateCartSubTotal from "../carts/calculations/cart-subtotal";
import CartCountBadge from "../carts/count-badge/CartCountBadge";
import ShoppingButton from "../carts/buttons/shopping-button";
import CheckoutButton from "../carts/buttons/checkout-button";

import { getCartsAction } from "../../../store/actions/orders/CartAction";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Checkout = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.products);

  return (
    <>
      <Card>
        <Row>
          <Col lg={16} sm={24}>
            <Title type="secondary" level={3}>
              Checkout
            </Title>
            <Divider />
          </Col>
          <Col lg={8} sm={24}>
            <Title type="secondary" level={3}>
              Total
            </Title>
            <Divider />
            <Row>
              <Col span={10}>Cart SubTotal</Col>
              <Col span={14}>
                <strong>{calculateCartSubTotal(carts)} TK</strong>
              </Col>
            </Row>
            <Row>
              <Col span={10}>Total Items</Col>
              <Col span={14}>
                <strong>
                  <CartCountBadge isCount={true} />
                </strong>
              </Col>
              <Col>
                <Link href="/carts">
                  <a>
                    <Button type="dashed" shape="round">
                      <ArrowLeftOutlined />
                      Edit Cart Items
                    </Button>
                  </a>
                </Link>
              </Col>
            </Row>

            <Divider />
            <Row>
              <Col span={10}>
                <Title level={4}>Grand Total</Title>
              </Col>
              <Col span={14}>
                <Title level={4}>{calculateCartSubTotal(carts)} TK</Title>
              </Col>
              <Col span={24}>
                <ShoppingButton />
                <CheckoutButton carts={carts} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Checkout;
