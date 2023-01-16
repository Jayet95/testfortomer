import React, { useRef, useEffect, useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { getImgs, createImg } from "../services/image.service";
import ImageCard from "../cards/ImageCard";
const Index = () => {
  const titleInputRef = useRef(null);
  const imageUrlInputRef = useRef(null);
  const [images, setImages] = useState([]);

  async function handleClick(e) {
    e.preventDefault();
    // async function createImage() {
    await createImg(
      titleInputRef.current.value,
      imageUrlInputRef.current.value
    );
    titleInputRef.current.value = "";
    imageUrlInputRef.current.value = "";
    // }

    fetchImages();
    // createImage();
  }

  async function fetchImages() {
    const data = await getImgs();

    setImages(data);
  }
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Paper>
        <form onSubmit={handleClick}>
          <TextField required inputRef={titleInputRef} />
          <TextField required inputRef={imageUrlInputRef} />
          <Button type="add" variant="contained">
            Add
          </Button>
        </form>
      </Paper>

      {images.map((image) => (
        <ImageCard fetchImages={fetchImages} image={image} key={image._id} />
      ))}
    </div>
  );
};

export default Index;
