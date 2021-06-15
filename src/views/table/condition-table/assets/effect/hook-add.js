import { useState } from "react";
function useHookAdd(fn) {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleAdd = () => {
    setVisible(true);
  };
  const handleOk = (params) => {
    setDisabled(true);
    fn(params).then((res) => {
      setDisabled(false);
      if (res.flag) {
        setVisible(false);
      }
    });
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return [visible, disabled, handleAdd, handleOk, handleCancel];
}
export default useHookAdd;
