import { Button } from "antd";
const conditionData = [
  {
    kind: "input",
    label: "描述",
    allowClear: true,
    prop: "description",
    rules: null,
  },
  {
    kind: "input",
    label: "标题",
    allowClear: true,
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
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
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
  {
    title: "爱好",
    dataIndex: "hobby",
    key: "hobby",
  },
  {
    title: "体重",
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: "身高",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "操作",
    dataIndex: "op",
    key: "op",
    render: () => {
      return <Button>操作</Button>;
    },
  },
];
export { conditionData, columns };
