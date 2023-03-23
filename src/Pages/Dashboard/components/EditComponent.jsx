import React, { useEffect, useState } from "react";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import FormComponent from "../../../components/FormComponent";
import moment from "moment/moment";
import { updateEvent } from "../../../redux/actions";
import { vsmForm, vsmNotify } from "../../../Config/messages";
import SaveParams from "../../../models/SaveParams";

const EditComponent = ({ visible, data, close }) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleUpdateEventSuccessed = () => {
    closeModel("success");
    vsmNotify.success({
      message: vsmForm.update,
    });
  };

  const handleUpdateEventFailed = () => {
    vsmNotify.success({
      message: vsmForm.fail,
    });
  };

  // Make function call to add new record
  const handleSubmit = (formdata) => {
    formdata.id = data.id;
    formdata.userId = data.userId;
    dispatch(
      updateEvent(
        new SaveParams(
          formdata,
          handleUpdateEventSuccessed,
          handleUpdateEventFailed
        )
      )
    );
  };

  // reset form and close add form
  const closeModel = (para) => {
    close(para);
    form.resetFields();
    setDisabled(true);
  };

  // set data on refresh page
  useEffect(() => {
    if (visible && data) {
      form.setFieldsValue({
        name: data.name,
        description: data.description,
        price: data.price,
        date: moment(data.date),
        tag: data.tag,
      });
    }
  }, [visible, data, form]);

  return (
    <FormComponent
      form={form}
      form_id="editform"
      title="Edit Event"
      visible={visible}
      close={closeModel}
      handleSubmit={handleSubmit}
      setDisabled={setDisabled}
      formButtons={[
        <Button
          key="1"
          form="editform"
          disabled={disabled}
          htmlType="submit"
          type="primary"
        >
          Update
        </Button>,
        <Button key="2" htmlType="button" onClick={closeModel}>
          Cancel
        </Button>,
      ]}
    />
  );
};

export default EditComponent;
