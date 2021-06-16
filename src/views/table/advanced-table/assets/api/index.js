import { v4 as uuidv4 } from "uuid";
export function getDataApi(params) {
  let total = 45,
    {page, pageSize } = params,
    content = [],
    len = page * pageSize > total ? total % pageSize : pageSize;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      content.push({
        id: i + 1,
        key: i + 1,
        name: "火箭",
        description: "冥王星七号",
        shopId: uuidv4(),
        shopAddress: "银河太阳穴冥王",
        shops: "行星",
        category: "重金属"
      });
    }
    setTimeout(() => {
      resolve({
        flag: true,
        data: content,
        total: total,
      });
    }, Math.random() * 3000);
  });
}
export function addDataApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, Math.random() * 3000);
  });
}
