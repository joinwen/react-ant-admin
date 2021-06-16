import { useState } from "react";
function useHookAdd(fn1, fn2) {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleAdd = () => {
    setVisible(true);
  };
  const handleOk = (params) => {
    setDisabled(true);
    return fn1(params).then((res) => {
      setDisabled(false);
      if (res.flag) {
        setVisible(false);
        fn2 && fn2();
        return true;
      }
    });
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return [visible, disabled, handleAdd, handleOk, handleCancel];
}
export default useHookAdd;
