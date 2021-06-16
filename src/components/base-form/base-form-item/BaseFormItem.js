import React from "react";
import { Form, Col } from "antd";
import map from "./form-items";

function BaseFormItem(props) {
  let data = props.data,
    { kind, children, prop, label, rules, outLayout, ...rest } = data,
    comp = map[kind];
  outLayout = outLayout || { xl: 4, md: 8, xs: 24 };
  return (
    <Col {...outLayout} className="p-y-0.5">
      <Form.Item name={prop} label={label} rules={rules}>
        {React.createElement(
          comp,
          {
            id: prop,
            ...rest,
          },
          data.children
        )}
      </Form.Item>
    </Col>
  );
}
export default BaseFormItem;
