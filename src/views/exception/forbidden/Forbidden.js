import "./Forbidden.scss";
import { Button } from "antd";
function Forbidden() {
  return (
    <div className="Forbidden">
      <div className="bg"></div>
      <p className="text">页面没有访问权限！！请点击返回首页或者刷新页面</p>
      <section className="btn-control">
        <Button className="btn-return">返回首页</Button>
        <Button className="btn-refresh">刷新页面</Button>
      </section>
    </div>
  )
}
export default Forbidden;
