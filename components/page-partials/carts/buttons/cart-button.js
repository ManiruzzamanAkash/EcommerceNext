import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spin, notification } from "antd";
import { ShoppingCartOutlined, LoadingOutlined } from "@ant-design/icons";
import {
  addToCartAction,
  getCartsAction,
  postEmptyCartMessage,
} from "../../../../store/actions/orders/CartAction";

const CartButton = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(product));
  };

  const loading_add = useSelector((state) => state.cart.loading_add);
  const add_message = useSelector((state) => state.cart.add_message);

  useEffect(() => {
    dispatch(getCartsAction());
    if (!loading_add && add_message.length > 0) {
      const key = "cartNotification";
      const placement = "bottomTop";
      notification["success"]({
        key,
        message: "Cart",
        description: "Item Added to the cart successfully",
        placement,
        duration: 1.5,
      });
      dispatch(postEmptyCartMessage());
    }
  }, [loading_add]);
  console.log("loading_add", loading_add);
  //   const carts = useSelector((state) => state.cart.carts);

  return (
    <>
      {loading_add && (
        <>
          <Button
            type="primary"
            size={"lg"}
            title="Adding..."
            className="buttonMinified"
          >
            {" "}
            <Spin indicator={<LoadingOutlined />} />
            &nbsp; Adding
          </Button>
        </>
      )}

      {!loading_add && (
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          size={"lg"}
          title="Add to cart"
          className="buttonMinified"
          product={product}
          onClick={addToCart}
        >
          Add Cart
        </Button>
      )}
    </>
  );
};

export default CartButton;
