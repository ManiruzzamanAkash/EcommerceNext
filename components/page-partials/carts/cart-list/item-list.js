import React from "react";

import {
  Row,
  Col,
  InputNumber,
  Button,
  Typography,
  Divider,
  Tooltip,
  Card,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import CartCountBadge from "../count-badge/CartCountBadge";
const { Title } = Typography;

const CartItemList = (props) => {
  const { carts, updateQty, deleteCartItem } = props;

  return (
    <>
      {/* <Card> */}
      <Title type="secondary" level={3}>
        My Carts
        <CartCountBadge />
      </Title>
      <Divider />
      <Row className="m-1">
        <Col span={2}>
          <strong>Sl</strong>
        </Col>
        <Col span={6}>
          <strong>Product</strong>
        </Col>
        <Col span={4}>
          <strong>Qty</strong>
        </Col>
        <Col span={4}>
          <strong>Price</strong>
        </Col>
        <Col span={4}>
          <strong>Sub Total</strong>
        </Col>
        <Col span={4}>
          <strong>Delete</strong>
        </Col>
      </Row>
      {carts &&
        carts.map((cart, index) => (
          <Row className="m-1" key={cart.id}>
            <Col span={2}>{index + 1}</Col>
            <Col span={6}>{cart.title}</Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={cart.stock}
                defaultValue={cart.qty}
                value={cart.qty}
                onChange={(qty) => updateQty(cart.id, qty)}
              />
            </Col>
            <Col span={4}>
              {cart.offer_price === null ? cart.price : cart.offer_price} TK
            </Col>
            <Col span={4}>
              <strong>
                {cart.qty *
                  (cart.offer_price === null
                    ? cart.price
                    : cart.offer_price)}{" "}
                TK
              </strong>
            </Col>
            <Col span={4}>
              <Tooltip title="Delete From Cart">
                <Button type="link" danger>
                  <DeleteOutlined onClick={() => deleteCartItem(cart.id)} />
                </Button>
              </Tooltip>
            </Col>
          </Row>
        ))}
      {/* </Card> */}
    </>
  );
};

export default CartItemList;
