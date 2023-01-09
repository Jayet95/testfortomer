const { getImgs } = require("../services/image.service");

exports.getImages = async (req, res) => {
  const data = await getImgs();
  res.status(200).send(data);
};
