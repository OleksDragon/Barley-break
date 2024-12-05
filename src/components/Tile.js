import React from "react";
import { Button } from "@mui/material";

const Tile = ({ number, onClick }) => {
  return (
    <Button
      variant="contained"
      color={number === 0 ? "inherit" : "primary"}
      onClick={onClick}
      sx={{
        width: "60px",
        height: "60px",
        fontSize: "18px",
        fontWeight: "bold",
        visibility: number === 0 ? "hidden" : "visible",
      }}
    >
      {number !== 0 ? number : ""}
    </Button>
  );
};

export default Tile;
