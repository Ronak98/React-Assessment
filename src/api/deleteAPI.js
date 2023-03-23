import axios from "axios";

const deleteAPI = async (resource, params) => {
  return axios
    .delete(`http://localhost:3004${resource}`, {
      headers: {
        "Content-Type": "application/json",
        params,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export default deleteAPI;
