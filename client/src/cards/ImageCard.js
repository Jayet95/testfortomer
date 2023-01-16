import React from "react";
import { Button } from "@mui/material";
import { deleteImg } from "../services/image.service";
import { CardMedia } from "./ImageCard.style";

async function deleteImage(id) {
  const data = await deleteImg(id);
}

const ImageCard = ({ image, fetchImages }) => {
  function handleClick() {
    deleteImage();
    fetchImages();
  }
  return (
    <div>
      {image.title}
      <CardMedia src={image.imageUrl} />
      <Button id={image._id} onClick={handleClick} variant="contained">
        Delete
      </Button>
    </div>
  );
};

export default ImageCard;
