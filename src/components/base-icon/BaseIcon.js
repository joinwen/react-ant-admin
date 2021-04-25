import * as Icons from "@ant-design/icons";
function BaseIcon(props) {
  let { name } = props,
    Comp = Icons[name];
  if(Comp) {
    return <Comp />;
  } else {
    return null;
  }
}
export default BaseIcon;
