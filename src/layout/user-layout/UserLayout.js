import "./UserLayout.scss";
function UserLayout(props) {
  let children = props.children;
  return (
    <div className="User-Layout">
      { children }
    </div>
  )
};
export default UserLayout;
