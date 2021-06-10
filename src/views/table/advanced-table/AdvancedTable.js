import {
  Form,
  Input,
  Button
} from "antd";
function AdvancedTable() {
  const handleSearch = (params) => {
    console.log(params);
  }
  return (
    <Form
      layout="inline"
      onFinish={handleSearch}
    >
      <Form.Item
        label="姓名"
        name="username"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="年龄"
        name="age"
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">搜索</Button>
      </Form.Item>
    </Form>
  )
}
export default AdvancedTable;
