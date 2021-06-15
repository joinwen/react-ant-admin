import BaseConditionForm from "../../../components/base-form/base-condition-form/BaseConditionForm";
import AddDialog from "./components/add-dialog/AddDialog";
import { conditionData, columns } from "./assets/model/index";
import useHookSearch from "./assets/effect/hook-search";
import useHookAdd from "./assets/effect/hook-add";
import { getData, addData } from "./assets/service";
import { useEffect } from "react";
import { Table, Button } from "antd";
function ConditionTable() {
  const [
    dataSource,
    total,
    page,
    pageSize,
    loading,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
  ] = useHookSearch(getData);
  const [visible, disabled, handleAdd, handleOk, handleCancel] = useHookAdd(
    addData
  );
  useEffect(() => {
    console.log("search");
    handleSearch();
  }, [page, pageSize]);
  return (
    <>
      <header className="main-reverse p-2 bg-white">
        <BaseConditionForm
          className="m-l-1"
          data={conditionData}
          onFinish={handleSearch}
        >
          <Button className="m-t-2 m-l-1" type="primary" onClick={handleAdd}>
            新增
          </Button>
        </BaseConditionForm>
      </header>

      <main className="p-2 bg-white">
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={loading}
          pagination={{
            total: total,
            current: page,
            pageSize: pageSize,
            onChange: handlePageChange,
            onShowSizeChange: handlePageSizeChange,
          }}
        />
      </main>
      <AddDialog
        disabled={disabled}
        visible={visible}
        title="新增"
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
}
export default ConditionTable;
