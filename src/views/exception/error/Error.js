import "./Error.scss";
import { Button } from "antd";
import useHomeHook from "../../../hooks/router/hook-home";
import useRefreshHook from "../../../hooks/router/hook-refresh";
function Error() {
  return (
    <div className="Error">
      <div className="bg"></div>
      <p className="text">服务器内部错误！！请点击返回首页或者刷新页面</p>
      <section className="btn-control">
        <Button className="btn-return" onClick={useHomeHook()}>
          返回首页
        </Button>
        <Button className="btn-refresh" onClick={useRefreshHook()}>
          刷新页面
        </Button>
      </section>
    </div>
  );
}
export default Error;
