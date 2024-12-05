import React from "react";
import { Button, Stack } from "@mui/material";

const Controls = ({
  theme,
  setTheme,
  mode,
  setMode,
  resetGame,
  setTimerRunning,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{ marginBottom: "20px" }}
    >
      <Button
        variant="contained"
        color="primary" 
        onClick={() => setTheme((prev) => !prev)} // Переключение темы
      >
        {theme === "light" ? "Темная тема" : "Светлая тема"}
      </Button>
      <Button
        variant="outlined"
        color="secondary" 
        onClick={() => {
          resetGame();
          setMode(mode === 15 ? 8 : 15);
        }}
      >
        Режим: {mode === 15 ? "3x3" : "4x4"}
      </Button>
      <Button
        variant="contained"
        color="error" 
        onClick={() => {
          resetGame();
          setTimerRunning(true);
        }}
      >
        Сбросить
      </Button>
    </Stack>
  );
};

export default Controls;
