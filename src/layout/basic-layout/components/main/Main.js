function Main(props) {
  return (
    <main
      style={{
        margin: "24px 16px",
        minHeight: 0,
      }}
    >
      {props.children}
    </main>
  );
}
export default Main;
