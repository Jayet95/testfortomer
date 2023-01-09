import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:9002",
  headers: {
    "content-type": "application/json",
  },
  timeout: 1000,
});

export const deleteImg = async (_id) => {
  try {
    const response = await api.delete("/img/delete", { _id });
    console.log(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createImg = async (title, imageUrl) => {
  try {
    const response = await api.post("/img/create", { title, imageUrl });
    console.log(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getImgs = async () => {
  const { data } = await api.get("/img/all");
  console.log(data);
  return data.data;
};
