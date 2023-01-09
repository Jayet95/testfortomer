import React from "react";
import {
  CardContainer,
  CardData,
  CardMedia,
  CardTitle,
  CharacterStatus,
  CharacterCardPropertyLabel,
  CharacterCardPropertyValue,
} from "./CharacterCard.style";
const ImageCard = ({ image }) => {
  return (
    <div>
      {image.title}
      <CardMedia src={image.imageUrl} />
    </div>
  );
};

export default ImageCard;
