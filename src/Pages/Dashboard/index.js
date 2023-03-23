import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TableComponent from "../../components/TableComponent";
import LoadParams from "../../models/LoadParams";
import { loadEvent, logout } from "../../redux/actions";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
const { Header, Content } = Layout;

export function Dashboard() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [updateEvents, setUpdateEvents] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLoadEventSuccessed = (events) => {
    setLoadedEvents(events);
  };

  const handleLoadEventFailed = () => {
    setLoadedEvents([]);
  };

  const handleLoadEvents = () => {
    if (user) {
      dispatch(
        loadEvent(
          new LoadParams(user, handleLoadEventSuccessed, handleLoadEventFailed)
        )
      );
    } else {
      history.push("/");
    }
  };

  // Open form for add new regular expression
  const openAddModal = () => setAddModal(true);

  // Close form for close new regular expression
  const closeAddModal = (para) => {
    if (para) {
      handleLoadEvents();
    }
    setAddModal(false);
  };

  // Open form for edit existing cash transaction and set values to form
  const openEditModal = (event) => {
    setUpdateEvents(event);
    setEditModal(true);
  };

  // Close form of edit cash transaction
  const closeEditModal = (para) => {
    if (para) {
      handleLoadEvents();
    }
    setEditModal(false);
  };

  useEffect(() => {
    handleLoadEvents();
  }, []);

  const onLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className="main_container">
      <Layout className="site-layout">
        <Header className="header_text">
          <div>Dashboard</div>
          <div>
            <Button onClick={openAddModal}>Add Event</Button>
            <Button className="ml10" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#f5f5f5",
          }}
        >
          <TableComponent data={loadedEvents} openEditModal={openEditModal} />
          <AddComponent visible={addModal} close={closeAddModal} />
          <EditComponent
            visible={editModal}
            close={closeEditModal}
            data={updateEvents}
          />
        </Content>
      </Layout>
    </div>
  );
}
