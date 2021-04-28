import { ACCESS_AUTHORIZATIONS } from "../config/globalConfig";
import { store } from "../store/store";
function isAuthorized(key) {
  let { permissions } = store.getState().permission;
  permissions = permissions || [];
  key = key ? key.split(",") : undefined;
  return !key || permissions.some(item => key.includes(item));
};
export default isAuthorized;
