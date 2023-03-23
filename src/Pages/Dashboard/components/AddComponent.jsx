import React, { useState } from "react";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import FormComponent from "../../../components/FormComponent";
import { saveEvent } from "../../../redux/actions/eventActions";
import { vsmForm, vsmNotify } from "../../../Config/messages";
import SaveParams from "../../../models/SaveParams";

const AddComponent = (props) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleSaveEventSuccessed = () => {
    close("success");
    vsmNotify.success({
      message: vsmForm.success,
    });
  };

  const handleSaveEventFailed = () => {
    vsmNotify.success({
      message: vsmForm.fail,
    });
  };

  // Make function call to add new record
  const handleSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    data.userId = user.id;
    dispatch(
      saveEvent(
        new SaveParams(data, handleSaveEventSuccessed, handleSaveEventFailed)
      )
    );
  };

  // reset form and close add form
  const close = (para) => {
    props.close(para);
    form.resetFields();
    setDisabled(true);
  };

  return (
    <FormComponent
      form={form}
      form_id="addform"
      title="Add Event"
      visible={props.visible}
      close={close}
      handleSubmit={handleSubmit}
      setDisabled={setDisabled}
      formButtons={[
        <Button
          key="1"
          form="addform"
          disabled={disabled}
          htmlType="submit"
          type="primary"
        >
          Save
        </Button>,
        <Button key="2" htmlType="button" onClick={close}>
          Cancel
        </Button>,
      ]}
    />
  );
};

export default AddComponent;
