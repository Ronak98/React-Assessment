import React from "react";
import { Form, Modal } from "antd";
import InputComponent from "./InputComponent";
import { vsmForm } from "../Config/messages";

const FormComponent = ({
  title,
  visible,
  close,
  formButtons,
  form,
  form_id,
  setDisabled,
  handleSubmit,
}) => {
  // check for valid form values then accordingly make save button disable/enable
  const handleChange = () => {
    form
      .validateFields()
      .then((data) => {
        setDisabled(false);
      })
      .catch((e) => {
        setDisabled(true);
      });
  };

  return (
    <Modal
      centered
      title={title}
      open={visible}
      onCancel={close}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      footer={formButtons}
    >
      <Form
        form={form}
        id={form_id}
        layout="vertical"
        onChange={handleChange}
        onFinish={handleSubmit}
      >
        <InputComponent
          required
          label="Name"
          name="name"
          placeholder="Name"
          tooltip="Name"
          rules={vsmForm.validation.name}
          maxLength={100}
          autoComplete="off"
        />
        <InputComponent
          required
          type="textarea"
          label="Description"
          name="description"
          placeholder="Description"
          tooltip="Description"
          rules={vsmForm.validation.description}
          maxLength={500}
          autoComplete="off"
        />
        <InputComponent
          required
          type="number"
          label="Price"
          name="price"
          placeholder="Price"
          tooltip="Price"
          rules={vsmForm.validation.price}
          maxLength={500}
          autoComplete="off"
        />
        <InputComponent
          required
          type="date"
          label="Event Date"
          name="date"
          tooltip="Event Date"
          onChange={handleChange}
          rules={vsmForm.validation.date}
        />
        <InputComponent
          required
          type="radio_button"
          label="Booking Type"
          name="tag"
          tooltip="Booking Type"
          options={["premium", "normal"]}
          rules={vsmForm.validation.tag}
        />
      </Form>
    </Modal>
  );
};

export default FormComponent;
