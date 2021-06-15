import { Modal, Form, Input, Button, Space } from "antd";
import { useRef } from "react";
function AddDialog({
  title,
  visible,
  disabled,
  handleOk,
  handleCancel,
  ...props
}) {
  const formRef = useRef(null);
  const handleFinish = (params) => {
    handleOk(params).then((flag) => {
      if (flag) {
        formRef.current.resetFields();
      }
    });
  };
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };
  return (
    <Modal
      title={title}
      visible={visible}
      okText="确定"
      cancelText="取消"
      onCancel={handleCancel}
      {...props}
      footer={null}
    >
      <Form ref={formRef} name="addDialog" {...layout} onFinish={handleFinish}>
        <Form.Item
          label="姓名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入姓名",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="体重" name="weight">
          <Input />
        </Form.Item>
        <Form.Item label="身高" name="height">
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button onClick={handleCancel}>取消</Button>
            <Button type="primary" htmlType="submit" disabled={disabled}>
              确定
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default AddDialog;
