import React from "react";
import { Button } from "@mui/material";
import { deleteImg } from "../services/image.service";
import { CardMedia } from "./ImageCard.style";

function handleClick() {
  async function deleteImage(id) {
    const data = await deleteImg(id);
  }

  deleteImage();
}

const ImageCard = ({ image }) => {
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
