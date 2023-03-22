import axios from "axios";

const loadAPI = async (resource, params) => {
  return axios
    .get(`http://localhost:3004${resource}`, {
      headers: {
        "Content-Type": "application/json",
        params,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export default loadAPI;
