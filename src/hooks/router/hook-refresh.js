import { useHistory } from "react-router-dom";
function useRefreshHook() {
  const history = useHistory();
  return () => history.go(0);
}
export default useRefreshHook;
