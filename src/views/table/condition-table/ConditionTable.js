import BaseConditionForm from "../../../components/base-form/base-condition-form/BaseConditionForm";
import { conditionData, columns } from "./assets/model/index";
import useHookSearch from "./assets/effect/hook-search";
import { useEffect } from "react";
import { Table } from "antd";
function ConditionTable() {
  const [dataSource, total, loading, handleSearch] = useHookSearch();
  useEffect(() => {
    handleSearch();
  })
  return (
    <>
      <header className="main-reverse p-2 bg-white">
        <BaseConditionForm
          layout="inline"
          data={conditionData}
          onFinish={handleSearch}
          name="condition"
        />
      </header>
      <main className="p-2 bg-white">
        <Table dataSource={dataSource} columns={columns} loading={loading} ></Table>
      </main>
    </>
  );
}
export default ConditionTable;
