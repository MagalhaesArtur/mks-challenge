import axios from "axios";

export const api = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
});

export const getProducts = async () => {
  const response = await api.get(
    "products?page=1&rows=8&sortBy=id&orderBy=DESC"
  );
  return response.data.products;
};
