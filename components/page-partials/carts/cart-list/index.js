import {
  Row,
  Col,
  InputNumber,
  Button,
  Space,
  Typography,
  Divider,
  Tooltip,
  Card,
} from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const CartList = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts([
      {
        product_id: 1,
        product_title: "Samsung Gallaxy J1",
        product_qty: 3,
        product_price: 20000,
        product_image:
          "https://www.gizmochina.com/wp-content/uploads/2019/03/Samsung-Galaxy-A70-600x600.jpg",
      },
      {
        product_id: 2,
        product_title: "Sony XPeria",
        product_qty: 2,
        product_price: 56300,
        product_image:
          "https://www.mytrendyphone.eu/images/Sony-Xperia-Z3-16GB-Factory-Refurbished-Black-10092019-01-p.jpg",
      },
      {
        product_id: 3,
        product_title: "Samsung Gallaxy J9",
        product_qty: 1,
        product_price: 12000,
        product_image:
          "https://www.gizmochina.com/wp-content/uploads/2019/03/Samsung-Galaxy-A70-600x600.jpg",
      },
      {
        product_id: 1,
        product_title: "Oppo A1",
        product_qty: 1,
        product_price: 10000,
        product_image:
          "https://www.gizmochina.com/wp-content/uploads/2019/03/Samsung-Galaxy-A70-600x600.jpg",
      },
    ]);
  }, []);
  return (
    <>
      <Row>
        <Col lg={16} sm={24}>
          <Card>
            <Title type="secondary" level={3}>
              My Carts
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
                <Row className="m-1" key={index}>
                  <Col span={2}>{index + 1}</Col>
                  <Col span={6}>{cart.product_title}</Col>
                  <Col span={4}>
                    <InputNumber min={1} defaultValue={cart.product_qty} />
                  </Col>
                  <Col span={4}>{cart.product_price} TK</Col>
                  <Col span={4}>{cart.product_qty * cart.product_price} TK</Col>
                  <Col span={4}>
                    <Tooltip title="Delete From Cart">
                      <Button type="link" danger>
                        <DeleteOutlined />
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              ))}
          </Card>
        </Col>
        <Col lg={8} sm={24}>
          <Card>
            <Title type="secondary" level={3}>
              Total
            </Title>
            <Divider />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartList;
