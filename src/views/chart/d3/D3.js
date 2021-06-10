import Bar from "./bar/Bar";
import Line from "./line/Line";
import Pie from "./pie/Pie";
import Scatter from "./scatter/Scatter";
import { Row, Col } from "antd";
function D3() {
  return (
    <>
      <Row className="p-2 bg-white" gutter={24}>
        <Col xl={12} sm={24} xs={24}>
          <figure className="p-1 shadow-light tx-center">
            <Bar />
          </figure>
        </Col>
        <Col xl={12} sm={24} xs={24}>
          <figure className="p-1 shadow-light tx-center">
            <Line />
          </figure>
        </Col>
        <Col xl={12} sm={24} xs={24}>
          <figure className="p-1 shadow-light tx-center">
            <Pie />
          </figure>
        </Col>
        <Col xl={12} sm={24} xs={24}>
          <figure className="p-1 shadow-light tx-center">
            <Scatter />
          </figure>
        </Col>
      </Row>
    </>
  );
}
export default D3;
