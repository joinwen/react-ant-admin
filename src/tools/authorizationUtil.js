import { ACCESS_AUTHORIZATIONS } from "../config/globalConfig";
function isAuthorized(key) {
  let keys = localStorage.getItem(ACCESS_AUTHORIZATIONS);
  keys = keys ? keys.split(",") : [];
  key = key ? key.split(",") : undefined;
  return keys.some(item => key.includes(item));
};
export default isAuthorized;
