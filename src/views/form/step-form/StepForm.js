import "./StepForm.scss";
import { Steps, Row, Col } from "antd";
import React from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import BaseBreadcrumb from "../../../components/base-breadcrumb/BaseBreadcrumb";
const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: FirstForm,
  },
  {
    title: "Second",
    content: SecondForm,
  },
  {
    title: "Last",
    content: ThirdForm,
  },
];

const StepForm = () => {
  const [current, setCurrent] = React.useState(0);
  const [params, setParams] = React.useState({});
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const reset = () => {
    setCurrent(0);
    setParams({});
  };

  const handleNext = (data) => {
    setParams({ ...params, ...data });
    next();
  };
  const handlePrev = (data) => {
    prev();
  };
  const handleReset = () => {
    reset();
  };

  return (
    <>
      <div className="step-header-wrapper p-2 bg-white main-reverse">
        <BaseBreadcrumb />
        <h2 className="fs-lg fw-bolder m-y-1">分步表单</h2>
        <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
      </div>
      <div className="step-content-wrapper bg-white">
        <Row type="flex" align="center">
          <Col xl={16} xs={22}>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="step-content">
              {React.createElement(steps[current].content, {
                handleNext,
                handlePrev,
                handleReset,
                params,
              })}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default StepForm;
