import { Form, Row, Col } from "antd";
import BaseFormItem from "../base-form-item/BaseFormItem";
function BaseConditionForm({ data, layoutCol, children, ...props }) {
  data = data || [];
  let layout = layoutCol || {
    labelCol: { xl: 8, xs: 8 },
    wrapperCol: { xl: 16, xs: 16 },
  };
  return (
    <>
      <Form {...layout} layout="inline" {...props}>
        <Row style={{ width: "100%" }}>
          {data.map((item, index) => (
            <BaseFormItem data={item} key={index} />
          ))}
          {children ? (
            <Col xs={24} className="p-y-0.5">
              {children}
            </Col>
          ) : null}
        </Row>
      </Form>
    </>
  );
}
export default BaseConditionForm;
