import BaseConditionForm from "../../../components/base-form/base-condition-form/BaseConditionForm";
import { Table, Form } from "antd";
import { conditionData, columns } from "./assets/model";
import useHookSearch from "../../../hooks/table/hook-search";
import { useEffect } from "react";
import { getData } from "./assets/service";

function AdvancedTable() {
  const [
    data,
    total,
    page,
    pageSize,
    loading,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
  ] = useHookSearch(getData);
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);
  return (
    <>
      <header className="main-reverse p-1 bg-white">
        <BaseConditionForm
          className="p-l-2"
          data={conditionData}
          onFinish={handleSearch}
        />
      </header>
      <main className="p-2 bg-white">
        <Table
          dataSource={data}
          columns={columns}
          loading={loading}
          pagination={{
            total: total,
            current: page,
            pageSize: pageSize,
            onChange: handlePageChange,
            onShowSizeChange: handlePageSizeChange,
          }}
          scroll={{
            x: 750,
          }}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <Form>
                  <Form.Item label="商品名称">
                    <span>{record.name}</span>
                  </Form.Item>
                  <Form.Item label="商品ID">
                    <span>{record.shopId}</span>
                  </Form.Item>
                  <Form.Item label="店铺地址">
                    <span>{record.shopAddress}</span>
                  </Form.Item>
                  <Form.Item label="所属店铺">
                    <span>{record.shops}</span>
                  </Form.Item>
                  <Form.Item label="商品分类">
                    <span>{record.category}</span>
                  </Form.Item>
                </Form>
              </>
            ),
          }}
        />
      </main>
    </>
  );
}
export default AdvancedTable;
