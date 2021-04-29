import { store } from "../store/store";
function isAuthorized(key) {
  let { permissions } = store.getState().permission;
  debugger;
  permissions = permissions || [];
  key = key ? key.split(",") : undefined;
  return !key || permissions.some(item => key.includes(item));
};
export default isAuthorized;
