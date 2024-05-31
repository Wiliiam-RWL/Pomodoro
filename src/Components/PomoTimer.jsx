import {
  Box,
  CircularProgress,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useRef, useState } from "react";

export default function PomoTimer({
  goalTime,
  timerState,
  handleTimeUp,
  passedTime,
  setPassedTime,
}) {
  const [intervalId, setIntervalId] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (timerState === "Stopping") {
      setPassedTime(0);
      clearInterval(intervalId);
      setIntervalId(null);
    } else if (timerState === "Running") {
      const id = setInterval(() => {
        setPassedTime((p) => p + 100);
      }, 100);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerState]);

  useEffect(() => {
    if (passedTime > goalTime) {
      setPassedTime(0);
      handleTimeUp();
    }
  }, [passedTime > goalTime]);

  useEffect(() => {
    setProgress((passedTime * 100) / goalTime);
  }, [passedTime]);

  const formatTime = () => {
    let second = Math.floor((goalTime - passedTime) / 1000);
    let minute = Math.floor(second / 60);
    second = second % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  };

  return (
    <Box paddingTop={2}>
      <Paper elevation={1} style={{ backgroundColor: "#F2F2F2" }}>
        <Typography variant="h1" paddingX={6} paddingY={2}>
          {formatTime()}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
      </Paper>
    </Box>
  );
}
