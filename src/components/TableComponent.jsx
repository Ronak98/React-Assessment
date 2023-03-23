import React from "react";
import { Button, Space, Table, Tag } from "antd";
import moment from "moment";

const TableComponent = ({ data = [], openEditModal, handleDeleteEvent }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, { date }) => <>{moment(date).format("DD-MM-YYYY")}</>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Booking Type",
      key: "tag",
      dataIndex: "tag",
      render: (_, { tag }) => (
        <>
          <Tag color={tag === "normal" ? "geekblue" : "green"} key={tag}>
            {tag?.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => openEditModal(record)}>Edit</Button>
          <Button onClick={() => handleDeleteEvent(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      style={{ minHeight: "200px" }}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default TableComponent;
