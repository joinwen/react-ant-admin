import { getDataApi, addDataApi } from "../api";
export function getData(params) {
  return getDataApi(params).then(res => {
    if(res.flag) {
      return {
        data: res.content,
        total: res.total
      }
    } else {
      console.log("error");
    }
  })
}

export function addData(params) {
  return addDataApi(params);
}
