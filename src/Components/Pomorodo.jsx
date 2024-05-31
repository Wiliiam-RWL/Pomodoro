import { Box, Button, Container, Grid, Paper } from "@mui/material";
import PomoButtons from "./PomoButtons";
import PomoTimer from "./PomoTimer";
import { useEffect, useRef, useState } from "react";
import Settings from "./Settings";
import TopProgress from "./TopProgress";
import StopDialog from "./StopDialog";

export default function Pomodoro() {
  const [focusTime, setFocusTime] = useState(30);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const [timerState, setTimerState] = useState("Stopping");
  const [goalTime, setGoalTime] = useState(focusTime * 60 * 1000);
  const [passedTime, setPassedTime] = useState(0);
  const [currentSession, setCurrentSession] = useState("Focus");
  const focusCount = useRef(0);

  const [isStopDialogOpen, setIsStopDialogOpen] = useState(false);

  const handleStartRunning = () => {
    if (timerState === "Stopping") {
      const focusSound = new Audio("../../public/Jinri-Focus.m4a");
      focusSound.play();
    }
    setTimerState("Running");
  };

  const handlePausing = () => {
    setTimerState("Pausing");
  };

  const handleStopDialogClose = () => {
    setIsStopDialogOpen(false);
  };

  const stopTimer = () => {
    setTimerState("Stopping");
    setCurrentSession("Focus");

    focusCount.current = 0;
    setGoalTime(focusTime * 60 * 1000);
  };

  const handleStopping = () => {
    setIsStopDialogOpen(true);
  };

  const handleSkipping = () => {
    if (timerState !== "Stopping") {
      setPassedTime(goalTime);
    }
  };

  const handleTimeUp = () => {
    if (currentSession === "Focus") {
      focusCount.current++;
      if (focusCount.current >= 4) {
        setCurrentSession("LongBreak");
        setGoalTime(longBreakTime * 60 * 1000);
        focusCount.current = 0;
        const longBreakSound = new Audio("../../public/Daren-LongBreak.m4a");
        longBreakSound.play();
      } else {
        setCurrentSession("ShortBreak");
        setGoalTime(shortBreakTime * 60 * 1000);
        const shortBreakSound = new Audio(
          "../../public/ZhongKouWei-ShortBreak.m4a"
        );
        shortBreakSound.play();
      }
    } else if (currentSession === "ShortBreak") {
      setCurrentSession("Focus");
      setGoalTime(focusTime * 60 * 1000);
      const focusSound = new Audio("../../public/Jinri-Focus.m4a");
      focusSound.play();
    } else {
      // Long Break
      setCurrentSession("Focus");
      setGoalTime(focusTime * 60 * 1000);
      const focusSound = new Audio("../../public/Jinri-Focus.m4a");
      focusSound.play();
    }
  };

  useEffect(() => {
    if (currentSession === "Focus") {
      setGoalTime(focusTime * 60 * 1000);
    } else if (currentSession === "LongBreak") {
      setGoalTime(longBreakTime * 60 * 1000);
    } else {
      setGoalTime(shortBreakTime * 60 * 1000);
    }
  }, [focusTime, longBreakTime, shortBreakTime]);

  return (
    <Box paddingX={12} paddingY={8}>
      <Paper elevation={3} style={{ backgroundColor: "#F2F2F2" }}>
        <Grid
          container
          paddingY={2}
          marginY={2}
          rowSpacing={2}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={12} paddingX={1}>
            <TopProgress
              stage={currentSession}
              foucsCounter={focusCount}
              currentSession={currentSession}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center" display="flex">
            <PomoTimer
              timerState={timerState}
              goalTime={goalTime}
              handleTimeUp={handleTimeUp}
              passedTime={passedTime}
              setPassedTime={setPassedTime}
            />
          </Grid>
          <Grid container item xs={11} justifyContent="center">
            <PomoButtons
              timerState={timerState}
              handleStartRunning={handleStartRunning}
              handlePausing={handlePausing}
              handleStopping={handleStopping}
              handleSkipping={handleSkipping}
            />
          </Grid>
          <Grid item xs={11}>
            <Settings
              focusTime={focusTime}
              setFocusTime={setFocusTime}
              longBreakTime={longBreakTime}
              setLongBreakTime={setLongBreakTime}
              shortBreakTime={shortBreakTime}
              setShortBreakTime={setShortBreakTime}
            />
          </Grid>
        </Grid>
      </Paper>
      <StopDialog
        open={isStopDialogOpen}
        handleClose={handleStopDialogClose}
        stopTimer={stopTimer}
      />
    </Box>
  );
}
