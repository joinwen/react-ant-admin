import "./NotFound.scss";
import { Button } from "antd";
function NotFound() {
  return (
    <div className="Not-Found">
      <div className="bg"></div>
      <p className="text">页面未找到！！请点击返回首页或者刷新页面~</p>
      <section className="btn-control">
        <Button className="btn-return">返回首页</Button>
        <Button className="btn-refresh">刷新页面</Button>
      </section>
    </div>
  );
}
export default NotFound;
