function Main(props) {
  return (
    <main
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {props.children}
    </main>
  );
}
export default Main;
