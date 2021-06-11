/**
 * 获取页面数据 API
 */
export function getDataApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let content = [
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
        ],
        total = 10;
      resolve({ content, total });
    }, Math.random() * 3000);
  });
}

/**
 * 添加数据 API
 */
export function addDataApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, Math.random() * 3000);
  });
}
