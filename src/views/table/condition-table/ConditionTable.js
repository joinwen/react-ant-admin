import BaseConditionForm from "../../../components/base-form/base-condition-form/BaseConditionForm";
import { Table } from "antd";
function ConditionTable() {
  const handleSearch = (params) => {
    console.log(params);
  };
  const data = [
    {
      kind: "input",
      label: "描述",
      prop: "description",
      rules: null,
    },
    {
      kind: "input",
      label: "标题",
      prop: "caption",
      rules: null,
    },
    {
      kind: "button",
      children: "查询",
      htmlType: "submit",
      type: "primary",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <header className="main-reverse p-2 bg-white">
        <BaseConditionForm
          layout="inline"
          data={data}
          onFinish={handleSearch}
          name="condition"
        />
      </header>
      <main className="p-2 bg-white">
        <Table dataSource={dataSource} columns={columns}></Table>
      </main>
    </>
  );
}
export default ConditionTable;
