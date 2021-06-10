import {
  Form,
  Input,
  Button
} from "antd";
import BaseFormItem from "../base-form-item/BaseFormItem";
function BaseConditionForm({ data, layoutCol, ...props}) {
  data = [
    {
      type: "input",
      label: "描述",
      prop: "description",
      rules: null
    },
    {
      type: "input",
      label: "标题",
      prop: "caption",
      rules: null
    },
    {
      type: "button",
      children: "查询",
      htmlType: "submit",
    }
  ];
  console.log(props);
  layoutCol = {
    labelCol: {xl: 8},
    wrapperCol: {xl: 16},
  }
  return (
    <Form
      {...layoutCol}
      {...props}
    >
      {
        data.map(item => {
          return <Form.Item
            label={item.label}
            name={item.prop}
            rules={item.rules}
          >
            <BaseFormItem data={item} />
          </Form.Item>
        })
      }
    </Form>
  )
}
export default BaseConditionForm;
