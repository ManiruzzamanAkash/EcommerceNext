import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Card, Skeleton, Row, Col } from "antd";
import { fetchSliders } from "../../../../store/actions/sliders/SliderAction";

const Slider = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  const sliders = useSelector((state) => state.slider.sliders);
  const loading = useSelector((state) => state.slider.loading);

  return (
    <>
      {loading && (
        <Row>
          <Col span={24}>
            <Card
              style={{ width: "100%", marginTop: 16 }}
              className="margin-center"
            >
              <Skeleton loading={loading} active></Skeleton>
            </Card>
          </Col>
        </Row>
      )}
      <Carousel>
        {!loading &&
          sliders &&
          sliders.map((slider, index) => (
            <div key={index}>
              <img src={slider.full_image} className="carousel-image" />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default Slider;
