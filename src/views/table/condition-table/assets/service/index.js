import { getDataApi } from "../api";
export function getData(setData, setTotal, setLoading) {
  setLoading(true);
  getDataApi().then((res) => {
    setData(res.content);
    setTotal(res.total);
    setLoading(false);
  });
}
