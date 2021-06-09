import { Result, Button } from "antd";
function ThirdForm(props) {
  const handleAgain = () => {
    props.handleReset();
  }
  return (
    <Result
      status="success"
      title="Success"
      subTitle="happy to watch tv on netflix"
      extra={[
        <Button type="primary" key="console" onClick={handleAgain}>
          Again
        </Button>,
        <Button key="buy">Home</Button>,
      ]}
    />
  )
}
export default ThirdForm;
