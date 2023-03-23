import { notification } from "antd";

const vsmAuth = {
  success: "Logged in successful",
  successRegister: "User created successfully",
  validation: {
    email: [
      { required: true, message: "Email Address cannot be empty." },
      {
        pattern:
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        message: "Invalid email address, please enter the valid email address",
      },
    ],
    password: [
      { required: true, message: "Password cannot be empty." },
      {
        pattern: /(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        message: "Password entry does not meet criteria.",
      },
    ],
    username: [{ required: true, message: "username cannot be empty." }],
  },
};

const vsmForm = {
  success: "Event created successfully",
  update: "Event updated successfully",
  fail: "Please try again later",
  validation: {
    name: [{ required: true, message: "Name cannot be empty." }],
    description: [{ required: true, message: "Description cannot be empty." }],
    price: [{ required: true, message: "Price cannot be empty." }],
    tag: [{ required: true, message: "Booking Type cannot be empty." }],
    date: [{ required: true, message: "Event Date cannot be empty." }],
  },
};

const vsmNotify = {
  success: (data) => {
    notification.success({ placement: "bottomRight", duration: 3, ...data });
  },
  error: (data) => {
    notification.error({ placement: "bottomRight", duration: 3, ...data });
  },
};

export { vsmNotify, vsmAuth, vsmForm };
