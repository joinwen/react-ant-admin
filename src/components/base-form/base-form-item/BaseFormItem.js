import React from "react";
import { Form } from "antd";
import map from "./form-items";

function BaseFormItem(props) {
  let data = props.data,
    { kind, children, prop, label, rules, ...rest } = data,
    comp = map[kind];
  return (
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
  );
}
export default BaseFormItem;
