import { Result, Button } from "antd";
function Failure() {
  return (
      <div className="p-2 bg-white">
        <Result
            status="error"
            title="Failed!"
            subTitle="Failed message: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
        />
      </div>
  )
}
export default Failure;
