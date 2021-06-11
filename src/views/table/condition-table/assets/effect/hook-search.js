import { useState } from "react";
import { getData } from "../service";

function useHookSearch() {
  const [data, setData] = useState([]),
    [total, setTotal] = useState([]),
    [loading, setLoading] = useState(false),
    handleSearch = () => getData(setData, setTotal, setLoading);
  return [
    data,
    total,
    loading,
    handleSearch
  ]
}
export default useHookSearch;
