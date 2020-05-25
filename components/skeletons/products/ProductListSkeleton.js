import React, { useState, useEffect } from "react";
import { Col, Card, Skeleton } from "antd";

const ProductListSkeleton = (props) => {
  const { loading } = props;
  const [itemCount] = useState(12);
  const [items, setitems] = useState([]);

  useEffect(() => {
    const items = [];
    for (let index = 1; index < itemCount; index++) {
      const item = (
        <Col xs={12} sm={8} md={6} lg={4} xl={4} span={6} key={index}>
          <Card style={{ width: 300, marginTop: 16 }} className="margin-center">
            <Skeleton loading={loading} avatar active></Skeleton>
          </Card>
        </Col>
      );
      items.push(item);
    }
    setitems(items);
  }, []);

  return <>{items}</>;
};

export default ProductListSkeleton;
