import { Form } from "antd";
import BaseFormItem from "../base-form-item/BaseFormItem";
function BaseConditionForm({ data, layoutCol, ...props }) {
  let layout = layoutCol || {
    labelCol: { xl: 8 },
    wrapperCol: { xl: 16 },
  };
  return (
    <Form {...layout} {...layoutCol} {...props}>
      {data.map((item, index) => (
        <BaseFormItem data={item} key={index} />
      ))}
    </Form>
  );
}
export default BaseConditionForm;
