const conditionData = [
  {
    kind: "input",
    label: "商品ID",
    allowClear: true,
    prop: "id",
    rules: null,
  },
  {
    kind: "input",
    label: "商品名称",
    allowClear: true,
    prop: "name",
    rules: null,
  },
  {
    kind: "input",
    label: "描述",
    allowClear: true,
    prop: "description",
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
    title: "商品ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "店铺ID",
    dataIndex: "shopId",
    key: "shopId",
  },
  {
    title: "店铺地址",
    dataIndex: "shopAddress",
    key: "shopAddress",
  },
  {
    title: "所属店铺",
    dataIndex: "shops",
    key: "shops",
  },
  {
    title: "商品分类",
    dataIndex: "category",
    key: "category",
  },
];
export { conditionData, columns };
