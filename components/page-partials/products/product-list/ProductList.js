import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Pagination } from "antd";

// Actions
import { fetchProducts } from "../../../../store/actions/products/ProductAction";
import ProductListItem from "./ProductListItem";
import ProductListSkeleton from "../../../skeletons/products/ProductListSkeleton";
import ProductListPagination from "./ProductListPagination";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const ProductList = (props) => {
  const dispatch = useDispatch();
  const [pageNo, setpageNo] = useState(1);
  const [pageSize, setpageSize] = useState(24);
  const [pageSizeOptions] = useState(["12", "24", "48", "102"]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const total = useSelector((state) => state.product.total);
  const loading = useSelector((state) => state.product.loading);

  const onChangePagination = (page) => {
    setpageNo(page);
    dispatch(fetchProducts(page, pageSize));
  };

  const onShowSizeChange = (current, pageSize) => {
    setpageSize(pageSize);
    dispatch(fetchProducts(pageNo, pageSize));
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={6}>
          <Title level={3}>All Products</Title>
        </Col>
        <Col span={18}>
          <ProductListPagination
            total={total}
            pageNo={pageNo}
            onChangePagination={onChangePagination}
            align={"center"}
            rowAlign={"center"}
            showLessItems={true}
            pageSize={pageSize}
            onShowSizeChange={onShowSizeChange}
            pageSizeOptions={pageSizeOptions}
          />
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        {loading && <ProductListSkeleton loading={loading} />}

        {!loading &&
          products &&
          products.map((product, index) => (
            <Col xs={12} sm={8} md={6} lg={4} xl={4} span={6} key={index}>
              <ProductListItem product={product} />
            </Col>
          ))}
      </Row>
      <ProductListPagination
        total={total}
        pageNo={pageNo}
        onChangePagination={onChangePagination}
        align={"right"}
        rowAlign={"end"}
        pageSize={pageSize}
        onShowSizeChange={onShowSizeChange}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
};

export default ProductList;
