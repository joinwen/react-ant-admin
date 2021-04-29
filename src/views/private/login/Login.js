import { Form, Input, Button, Checkbox, notification } from "antd";
import { Login as UserLogin } from "../../../store/user/user";
import { useDispatch } from "react-redux";
import { DEFAULT_PATH } from "../../../config/globalConfig";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login(props) {
  const dispatch = useDispatch(),
    history = useHistory();
  const onFinish = (values) => {
    dispatch(UserLogin(values))
      .then((res) => {
        let search = history.location.search;
        search = search && search.match(/\?redirect=(.*)$/)[1];
        if (search) {
          history.push(search);
        } else {
          history.push(DEFAULT_PATH);
        }
      })
      .catch((error) => {
        notification.error({
          message: "错误",
          description: "用户名或密码错误",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
