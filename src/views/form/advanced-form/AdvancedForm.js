import { Input } from "antd";
import BaseBreadcrumb from "../../../components/base-breadcrumb/BaseBreadcrumb";
import FormCard from "./components/FormCard";
function AdvancedForm() {
  const userData = [
    {
      label: "仓库名",
      comp: <Input />
    },
    {
      label: "仓库域名",
      comp: <Input />
    },
    {
      label: "仓库管理员",
      comp: <Input />
    },
    {
      label: "审批人",
      comp: <Input />
    },
    {
      label: "生效日期",
      comp: <Input />
    }
  ]
  return(
    <>
      <div className="main-reverse bg-white p-2">
        <BaseBreadcrumb />
        <h2 className="fs-lg fw-bolder m-y-1">高级表单</h2>
        <p>
          高级表单常见于一次性输入和提交大批量数据的场景。
        </p>
      </div>
      <div className="advanced-content bg-white">
        <FormCard data={userData} title="用户管理" />
        <FormCard data={userData} title="用户管理" />
      </div>
      <div className="advanced-content bg-white">
        <FormCard data={userData} title="用户管理" />
        <FormCard data={userData} title="用户管理" />
      </div>
    </>
  )
}
export default AdvancedForm;
