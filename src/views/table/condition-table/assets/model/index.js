const conditionData = [
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
export {
  conditionData,
  columns
}
