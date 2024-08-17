import axios from "axios";

export const api = axios.create({
  baseURL: "https://66be63b374dfc195586f5e36.mockapi.io",
});

export const getCampers = (page) => {
  return api.get(`/campers?page=${page}`).then((response) => response.data);
};
