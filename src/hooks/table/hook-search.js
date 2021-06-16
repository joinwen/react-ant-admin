import { useState, useCallback } from "react";
function useHookSearch(fn) {
  const [data, setData] = useState([]),
    [total, setTotal] = useState([]),
    [page, setPage] = useState(1),
    [pageSize, setPageSize] = useState(10),
    [loading, setLoading] = useState(false),
    handleSearch = useCallback(
      (params) => {
        setLoading(true);
        fn({ ...params, page, pageSize })
          .then((res) => {
            setData(res.data);
            setTotal(res.total);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });
      },
      [fn, page, pageSize]
    ),
    handlePageChange = (page) => setPage(page),
    handlePageSizeChange = (page, size) => {
      setPageSize(size);
      setPage(page);
    };
  return [
    data,
    total,
    page,
    pageSize,
    loading,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
  ];
}
export default useHookSearch;
