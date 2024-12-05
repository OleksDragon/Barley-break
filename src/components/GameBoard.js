import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Tile from "./Tile";

const GameBoard = ({ mode, setMoves, setTimerRunning }) => {
  const [tiles, setTiles] = useState([]);
  const [gameWon, setGameWon] = useState(false); // Статус выигрыша

  // Генерация плиток при загрузке
  useEffect(() => {
    const size = mode === 8 ? 3 : 4;
    const numbers = Array.from({ length: size * size }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );
    setTiles(numbers);
    setGameWon(false);
    setTimerRunning(false);
  }, [mode, setTimerRunning]);

  // Проверка на выигрыш
  const checkWinCondition = (currentTiles) => {
    const isWinning = currentTiles
      .slice(0, -1)
      .every((tile, index) => tile === index + 1);
    if (isWinning) {
      setTimerRunning(false); // Остановка таймера
      setGameWon(true); // Фиксация выигрыша
    }
  };

  // Логика перемещения плиток
  const handleTileClick = (index) => {
    const emptyIndex = tiles.indexOf(0);
    const size = Math.sqrt(tiles.length);

    // Проверяем, можно ли переместить плитку
    if (
      (index === emptyIndex - 1 && emptyIndex % size !== 0) ||
      (index === emptyIndex + 1 && index % size !== 0) ||
      index === emptyIndex - size ||
      index === emptyIndex + size
    ) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [
        newTiles[index],
        newTiles[emptyIndex],
      ];
      setTiles(newTiles);
      setMoves((prev) => prev + 1); // Увеличение счетчика ходов
      setTimerRunning(true); // Запуск таймера
      checkWinCondition(newTiles); // Проверка состояния игры
    }
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      {gameWon && (
        <Typography variant="h6" sx={{ color: "green", marginBottom: "10px" }}>
          Поздравляем, вы выиграли!
        </Typography>
      )}
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          maxWidth: mode === 8 ? "240px" : "320px",
          margin: "0 auto",
        }}
      >
        {tiles.map((number, index) => (
          <Grid item xs={mode === 8 ? 4 : 3} key={index}>
            <Tile number={number} onClick={() => handleTileClick(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default GameBoard;
