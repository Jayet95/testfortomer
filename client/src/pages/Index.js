import React, { useRef, useEffect, useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { getImgs } from "../services/image.service";
import ImageCard from "../cards/ImageCard";
const Index = () => {
  const titleInputRef = useRef(null);
  const imageUrlInputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    console.log(titleInputRef.current.value);
  }

  const [image, setImage] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      const data = await getImgs();

      setImage(data);
    }
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

      {image.map((image) => (
        <ImageCard image={image} key={image._id} />
      ))}
    </div>
  );
};

export default Index;
