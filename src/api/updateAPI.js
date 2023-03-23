import axios from "axios";

const updateAPI = async (resource, payload, headers = {}) => {
  return axios
    .put(`http://localhost:3004${resource}`, payload, headers)
    .then((response) => response)
    .catch((error) => error);
};

export default updateAPI;
