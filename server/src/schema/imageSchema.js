const { Schema, model, SchemaTypes } = require("mongoose");
const uuid = require("uuid");
const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
