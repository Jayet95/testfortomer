import React, { useRef } from "react";
import { Paper, TextField, Button } from "@mui/material";

const Index = () => {
  const titleInputRef = useRef(null);
  const imageUrlInputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    console.log(
      `${titleInputRef.current.value} ${imageUrlInputRef.current.value}`
    );
  }
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
    </div>
  );
};

export default Index;
