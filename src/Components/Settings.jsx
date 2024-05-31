import { Box, Card, Grid, Input, Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";
import ComputerIcon from "@mui/icons-material/Computer";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DeckIcon from "@mui/icons-material/Deck";

export default function Settings({
  focusTime,
  setFocusTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
}) {
  const handleFocusSliderChange = (event, newValue) => {
    setFocusTime(newValue);
  };

  const handleFocusInputChange = (event) => {
    setFocusTime(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleShortBreakSliderChange = (event, newValue) => {
    setShortBreakTime(newValue);
  };

  const handleShortBreakInputChange = (event) => {
    setShortBreakTime(
      event.target.value === "" ? 0 : Number(event.target.value)
    );
  };

  const handleLongBreakSliderChange = (event, newValue) => {
    setLongBreakTime(newValue);
  };

  const handleLongBreakInputChange = (event) => {
    setLongBreakTime(
      event.target.value === "" ? 0 : Number(event.target.value)
    );
  };

  const handleFocusBlur = () => {
    if (focusTime < 1) {
      setFocusTime(1);
    } else if (focusTime > 60) {
      setFocusTime(60);
    }
  };
  const handleLongBreakBlur = () => {
    if (longBreakTime < 1) {
      setLongBreakTime(1);
    } else if (longBreakTime > 60) {
      setLongBreakTime(60);
    }
  };
  const handleShortBreakBlur = () => {
    if (shortBreakTime < 1) {
      setShortBreakTime(1);
    } else if (shortBreakTime > 30) {
      setShortBreakTime(30);
    }
  };

  return (
    <>
      <Card style={{ backgroundColor: "#F2F2F2" }}>
        <Grid container display={"flex"} padding={2} spacing={1}>
          <Grid item xs={4} display={"flex"} justifyContent={"center"}>
            <Box sx={{ width: 250 }}>
              <Typography id="focus-slider" gutterBottom>
                Focus Time
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <ComputerIcon />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={typeof focusTime === "number" ? focusTime : 0}
                    onChange={handleFocusSliderChange}
                    aria-labelledby="focus-slider"
                    min={1}
                    max={60}
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={focusTime}
                    size="small"
                    onChange={handleFocusInputChange}
                    onBlur={handleFocusBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 60,
                      type: "number",
                      "aria-labelledby": "focus-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent={"center"}>
            <Box sx={{ width: 250 }}>
              <Typography id="longbreak-slider" gutterBottom>
                Long Break
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <DeckIcon />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={
                      typeof longBreakTime === "number" ? longBreakTime : 0
                    }
                    onChange={handleLongBreakSliderChange}
                    aria-labelledby="longbreak-slider"
                    min={1}
                    max={60}
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={longBreakTime}
                    size="small"
                    onChange={handleLongBreakInputChange}
                    onBlur={handleLongBreakBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 60,
                      type: "number",
                      "aria-labelledby": "longbreak-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent={"center"}>
            <Box sx={{ width: 250 }}>
              <Typography id="shortbreak-slider" gutterBottom>
                Short Break
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <CoffeeIcon />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={
                      typeof shortBreakTime === "number" ? shortBreakTime : 0
                    }
                    onChange={handleShortBreakSliderChange}
                    aria-labelledby="shortbreak-slider"
                    min={1}
                    max={30}
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={shortBreakTime}
                    size="small"
                    onChange={handleShortBreakInputChange}
                    onBlur={handleShortBreakBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 30,
                      type: "number",
                      "aria-labelledby": "shortbreak-slider",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
