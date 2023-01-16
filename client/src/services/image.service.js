import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:9002",
  headers: {
    "content-type": "application/json",
  },
  timeout: 1000,
});

export const deleteImg = async (id) => {
  try {
    const { data } = await api.delete(`/img/delete`, id);

    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createImg = async (title, imageUrl) => {
  try {
    const response = await api.post("/img/create", { title, imageUrl });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getImgs = async () => {
  const { data } = await api.get("/img/all");

  return data.data;
};
