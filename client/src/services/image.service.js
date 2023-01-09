const END_POINT = "http://localhost:9002/img";
const createImg = async (title, imageUrl) => {
  try {
    const response = await api.post("/all", { title, imageUrl });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
const getImgs = async () => {
  try {
    const response = await api.post(`${createImg}/all`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

const imageService = { getImgs };
export default imageService;
