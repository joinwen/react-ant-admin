import { Result, Button } from "antd";
function Success() {
  return (
      <div className="p-2 bg-white">
        <Result
            status="success"
            title="Successfully!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
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
export default Success;
