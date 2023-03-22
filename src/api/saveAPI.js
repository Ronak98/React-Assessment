import axios from "axios";

const saveAPI = async (resource, payload, headers = {}) => {
  return axios
    .post(`http://localhost:3004${resource}`, payload, headers)
    .then((response) => response)
    .catch((error) => error);
};

export default saveAPI;
