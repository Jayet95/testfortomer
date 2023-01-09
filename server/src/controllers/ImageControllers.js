const Image = require("../schema/imageSchema");

exports.create = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    const newImage = await Image.create({
      title,
      imageUrl,
    });
    res.status(200).json({ success: true, data: newImage });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
exports.delete = async (req, res) => {
  try {
    const { _id } = req.body;
    await Image.findByIdAndDelete({ _id });
    const images = await Image.find();
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};
exports.all = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.imageAdd = async (req, res, next) => {};
