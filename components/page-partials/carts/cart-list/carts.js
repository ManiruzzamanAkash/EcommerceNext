import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Typography, Divider, Card, notification } from "antd";
import {
  getCartsAction,
  deleteCartItemAction,
  updateCartQtyAction,
  postEmptyCartDeleteMessage,
} from "../../../../store/actions/orders/CartAction";
import CartItemList from "./item-list";
import calculateCartSubTotal from "../calculations/cart-subtotal";
import CartCountBadge from "../count-badge/CartCountBadge";
import ShoppingButton from "../buttons/shopping-button";
import CheckoutButton from "../buttons/checkout-button";
const { Title } = Typography;

const CartList = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(getCartsAction());
  }, [dispatch]);

  const delete_message = useSelector((state) => state.cart.delete_message);
  useEffect(() => {
    if (delete_message.length > 0) {
      const key = "cartNotification";
      const placement = "bottomTop";
      notification["success"]({
        key,
        message: "Cart",
        description: delete_message,
        placement,
        duration: 1.5,
      });
      dispatch(postEmptyCartDeleteMessage());
    }
  }, [delete_message]);

  const updateQty = (product_id, qty) => {
    dispatch(updateCartQtyAction(product_id, qty));
  };
  const deleteCartItem = (product_id) => {
    dispatch(deleteCartItemAction(product_id));
  };

  return (
    <>
      <Card>
        <Row>
          <Col lg={16} sm={24}>
            <CartItemList
              carts={carts}
              updateQty={updateQty}
              deleteCartItem={deleteCartItem}
            />
          </Col>
          <Col lg={8} sm={24}>
            {/* <Card> */}
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
            {/* </Card> */}
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CartList;
