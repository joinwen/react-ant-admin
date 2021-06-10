import BaseConditionForm from "../../../components/base-form/base-condition-form/BaseConditionForm";
function ConditionTable() {
  const handleSearch = (params) => {
    console.log(params);
  }
  return (
    <BaseConditionForm layout="inline" onFinish={handleSearch} name="condition" />
  );
}
export default ConditionTable;
