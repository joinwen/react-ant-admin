import Line from "./line/Line";
import Pie from "./pie/Pie";
import Scatter from "./scatter/Scatter";
import Polar from "./polar/Polar";
import Map from "./map/Map";
import Bar from "./bar/Bar";
import { Row, Col } from "antd";
function Echarts() {
  return (
    <>
      <div className="p-2 bg-white">
        <Row gutter={24}>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Line />
            </figure>
          </Col>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Pie />
            </figure>
          </Col>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Scatter />
            </figure>
          </Col>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Polar />
            </figure>
          </Col>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Map />
            </figure>
          </Col>
          <Col xl={12} md={24} xs={24}>
            <figure className="p-1 shadow-light">
              <Bar />
            </figure>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Echarts;
