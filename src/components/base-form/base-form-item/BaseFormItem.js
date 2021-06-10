import React from "react";
import map from "./form-items";

function BaseFormItem(props) {
  let data = props.data,
    type = data.type,
    comp = map[type];
  return React.createElement(comp,{
    id: data.prop,
    ...data
  }, data.children);
}
export default BaseFormItem;
