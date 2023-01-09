const imageService = require("../services/image.service");

exports.getImages = async (req, res) => {
  const data = await imageService.getImgs();
  res.status(200).send(data);
};
