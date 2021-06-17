import { Form, Input, Button } from "antd";
function SecondForm(props) {
  const layout = {
    labelCol: { span: 6},
    wrapperCol: { span: 18}
  };
  const tailLayout = {
    wrapperCol: {
      sm: {
        span: 18,
        offset: 6
      },
      xs: {
        span: 24,
        offset: 0
      }
    },
  };
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
  }
  const onFinish = (values) => {
    props.handleNext(values);
  }
  return (
    <Form
      {...layout}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item {...tailLayout}>
        <h3>
          Input your password
        </h3>
        <div>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        label="Pay password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item { ...tailLayout }>
        <Button type="primary" className="m-r-1" htmlType="submit">Submit</Button>
        <Button onClick={props.handlePrev}>Previous</Button>
      </Form.Item>
    </Form>
  )
};
export default SecondForm;
