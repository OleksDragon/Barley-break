import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Controls from "./components/Controls";
import GameBoard from "./components/GameBoard";
import Stats from "./components/Stats";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Управление темой
  const [mode, setMode] = useState(15); // Режим (15 - 4x4, 8 - 3x3)
  const [moves, setMoves] = useState(0); // Количество ходов
  const [time, setTime] = useState(0); // Таймер
  const [timerRunning, setTimerRunning] = useState(false); // Статус таймера

  // Управление таймером
  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  // Сброс игры
  const resetGame = () => {
    setMoves(0);
    setTime(0);
    setTimerRunning(false);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ff9800",
      },
      secondary: {
        main: "#f57c00",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00bcd4",
      },
      secondary: {
        main: "#008394",
      },
    },
  });

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "50px" }}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Пятнашки
          </Typography>
          <Controls
            theme={isDarkTheme ? "dark" : "light"}
            setTheme={setIsDarkTheme}
            mode={mode}
            setMode={setMode}
            resetGame={resetGame}
            setTimerRunning={setTimerRunning}
          />
          <GameBoard
            mode={mode}
            setMoves={setMoves}
            setTimerRunning={setTimerRunning}
          />
          <Stats moves={moves} time={time} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
