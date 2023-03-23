import React from "react";
import { DatePicker, Form, Input, InputNumber, Radio, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const InputComponent = ({
  hasFeedback,
  hidden,
  label,
  required,
  rules,
  name,
  tooltip,
  hint,
  type,
  options,
  initialValue,
  extra,
  note,
  ...rest
}) => {
  switch (type) {
    case "date":
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
          >
            <DatePicker {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className="ml-10" />
            </Tooltip>
          )}
        </Form.Item>
      );

    case "number":
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
            onChange={rest.onChange}
          >
            <InputNumber min={0} {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className="ml-10" />
            </Tooltip>
          )}
        </Form.Item>
      );

    case "textarea":
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
          >
            <Input.TextArea rows={3} {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className="ml-10" />
            </Tooltip>
          )}
        </Form.Item>
      );

    case "radio_button":
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
            initialValue={initialValue}
          >
            <Radio.Group
              buttonStyle="solid"
              {...rest}
              className={options.className}
            >
              <Radio value={"premium"}>Premium</Radio>
              <Radio value={"normal"}>Normal</Radio>
            </Radio.Group>
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className="ml-10" />
            </Tooltip>
          )}
        </Form.Item>
      );

    default:
      return (
        <Form.Item
          label={label}
          tooltip={tooltip}
          extra={note}
          required={required ? true : false}
          hidden={hidden}
        >
          <Form.Item
            hasFeedback={hasFeedback}
            name={name}
            noStyle
            rules={rules}
          >
            <Input {...rest} />
          </Form.Item>
          {hint && (
            <Tooltip title={hint}>
              <InfoCircleOutlined className="ml-10" />
            </Tooltip>
          )}
        </Form.Item>
      );
  }
};

export default InputComponent;
