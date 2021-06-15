import { v4 as uuidv4 } from "uuid";
/**
 * 获取页面数据 API
 */
export function getDataApi(params) {
  let total = 65,
    {page, pageSize} = params,
    len = page * pageSize < total ? pageSize : total % pageSize,
    content = [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < len; i++) {
        content.push({
          id: uuidv4(),
          key: i,
          name: "胡彦斌",
          age: 32,
          hobby: "足球",
          description: "一段简单的介绍",
          weight: "60kg",
          height: "179",
          status: 2,
          address: "西湖区湖底公园1号",
        });
      }
      resolve({ flag: true, content, total });
    }, Math.random() * 3000);
  });
}

/**
 * 添加数据 API
 */
export function addDataApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({flag: true});
    }, Math.random() * 3000);
  });
}
