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
    addData,
    handleSearch
  );
  useEffect(() => {
    console.log("search");
    handleSearch();
  }, [handleSearch]);
  return (
    <>
      <header className="main-reverse p-2 bg-white">
        <BaseConditionForm
          className="m-l-1"
          data={conditionData}
          onFinish={handleSearch}
        >
          <Button type="primary" onClick={handleAdd}>
            新增
          </Button>
        </BaseConditionForm>
      </header>

      <main className="p-2 bg-white">
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={loading}
          scroll={{
            x: 750,
          }}
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
