import React from "react";
import { Row, Col, Pagination } from "antd";

const ProductListPagination = (props) => {
  const {
    pageNo,
    onChangePagination,
    total,
    align,
    rowAlign,
    pageSize,
    onShowSizeChange,
    pageSizeOptions,
  } = props;

  return (
    <Row justify={rowAlign} align={align}>
      <Col span={24}>
        <Pagination
          current={pageNo}
          onChange={onChangePagination}
          total={total}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          showQuickJumper
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
        />
      </Col>
    </Row>
  );
};

export default ProductListPagination;
