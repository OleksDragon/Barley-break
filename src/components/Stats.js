import React from "react";
import { Box, Typography } from "@mui/material";

const Stats = ({ moves, time }) => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography variant="body1">Ходы: {moves}</Typography>
      <Typography variant="body1">Время: {time} сек</Typography>
    </Box>
  );
};

export default Stats;
