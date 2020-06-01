import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCartsAction } from "../../../../store/actions/orders/CartAction";
import { Badge } from "antd";

const CartCountBadge = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartsAction());
  }, [dispatch]);

  const carts = useSelector((state) => state.cart.products);

  const getTotalItemCounts = (arrayItems) => {
    let total = 0;
    if (arrayItems.length > 0) {
      arrayItems.forEach((item) => {
        total += item.qty;
      });
    }
    return total;
  };
  const isCount = props.isCount ? true : false;
  return (
    <>
      {isCount && <span>{getTotalItemCounts(carts)}</span>}
      {!isCount && (
        <Badge count={getTotalItemCounts(carts)}>&nbsp;&nbsp;&nbsp;</Badge>
      )}
    </>
  );
};

export default CartCountBadge;
