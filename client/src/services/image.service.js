import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:9002",
  timeout: 1000,
});
const API_ENDPOINT = "http://localhost:9002";
// const api = axios.get({
//   baseURL: "http://localhost:9002/img",
//   headers: { "Content-Type": "application/json" },
// });

// const createImg = async (title, imageUrl) => {
//   try {
//     const response = await api.post("/all", { title, imageUrl });
//     return response;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
export const getImgs = async () => {
  const { data } = await api.get("/img/all");
  console.log(data);
  return data.data;
};
