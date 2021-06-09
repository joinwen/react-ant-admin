import { Form, Row, Col, Divider } from "antd";
function FormCard(props) {
  const { data, title } = props;
  const layout = {
    wrapperCol: {
      span: 24
    }
  }
  return (
    <div className="p-2">
      <h2 className="fs-md m-b-0">{title}</h2>
      <Divider />
      <Form
        {...layout}
        layout="vertical"
      >
          <Row
            gutter={ { xs: 8, sm: 16, md: 24} }
          >
            {
              data.map(item => {
                return (
                  <Col xl={8} sm={16}>
                    <Form.Item
                      label={item.label}
                    >
                      {item.comp}
                    </Form.Item>
                  </Col>
                )
              })
            }
          </Row>
      </Form>
    </div>
  )
}
export default FormCard;
