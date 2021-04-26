import { ACCESS_TOKEN } from "../config/globalConfig";
function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}
export default getAccessToken;
