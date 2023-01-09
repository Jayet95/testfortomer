import React from "react";
import { Button } from "@mui/material";
import { deleteImg } from "../services/image.service";
import {
  CardContainer,
  CardData,
  CardMedia,
  CardTitle,
  CharacterStatus,
  CharacterCardPropertyLabel,
  CharacterCardPropertyValue,
} from "./CharacterCard.style";

function deleteOnClick() {
  async function deleteImage(_id) {
    const data = await deleteImg(_id);
    console.log(data);
  }

  deleteImage();
}

const ImageCard = ({ image }) => {
  return (
    <div>
      {image.title}
      <CardMedia src={image.imageUrl} />
      <Button
        _id={image._id}
        onClick={() => deleteOnClick(image._id)}
        variant="contained"
      >
        Delete
      </Button>
    </div>
  );
};

export default ImageCard;
