import { useHistory } from "react-router-dom";
import { DEFAULT_PATH } from "../../config/globalConfig";
function useHomeHook() {
  const history = useHistory();
  return () => history.push(DEFAULT_PATH);
}
export default useHomeHook;
