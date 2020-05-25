import React from "react";
import { Card, Tooltip, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import CartButton from "../../carts/buttons/cart-button";

const ProductListItem = (props) => {
  const { product } = props;
  return (
    <>
      <Card
        className="product-single"
        cover={<img alt="example" src={product.featured_image_sm} />}
      >
        {product.stock == 0 && (
          <span className="product-stock">Out of Stock</span>
        )}

        <Meta title={product.title} />
        <Paragraph>
          {product.offer_price !== null && (
            <span className="price-off">{`${product.price} BDT`}</span>
          )}

          {product.offer_price === null && (
            <span className="price-on">{`${product.price} BDT`}</span>
          )}

          {product.offer_price !== null && (
            <span className="price-on">{`${product.offer_price} BDT`}</span>
          )}
        </Paragraph>

        <div className="cart-buttons mt-1">
          <Tooltip title="Add to cart">
            {/* <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size={"lg"}
              title="Add to cart"
              className={styles.buttonMinified}
              product={product}
            >
              Add Cart
            </Button> */}
            <CartButton product={product} />
          </Tooltip>
          <Tooltip title="Buy Product Directly">
            <Button
              type="warning"
              icon={<ShoppingCartOutlined />}
              size={"lg"}
              title="Buy"
              className="buttonMinified"
            >
              Buy
            </Button>
          </Tooltip>
        </div>
      </Card>
    </>
  );
};

export default ProductListItem;
