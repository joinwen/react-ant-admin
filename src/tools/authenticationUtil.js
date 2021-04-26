import { ACCESS_TOKEN } from "../config/globalConfig";
function isAuthenticated() {
  return !!localStorage.getItem(ACCESS_TOKEN);
}
export default isAuthenticated;
