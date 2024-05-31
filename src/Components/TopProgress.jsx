import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TopProgress({ stage, foucsCounter }) {
  const [progressValues, setProgressValues] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [relaxing, setRelaxing] = useState("determinate");

  useEffect(() => {
    let newVlaues = [...progressValues];
    if (stage === "ShortBreak") {
      newVlaues[2 * foucsCounter.current - 2] = 100;
    } else if (stage === "Focus") {
      if (foucsCounter.current === 0) {
        newVlaues = [0, 0, 0, 0, 0, 0, 0, 0];
        setRelaxing("determinate");
      } else {
        newVlaues[2 * foucsCounter.current - 1] = 100;
      }
    } else {
      newVlaues[6] = 100;
      setRelaxing("indeterminate");
    }
    setProgressValues(newVlaues);
  }, [stage, foucsCounter.current]);
  return (
    <Grid container display={"flex"} alignContent={"center"} paddingX={2}>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"left"}
        alignContent={"center"}
      >
        <Typography variant="body2" color="text.secondary">
          {stage}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[0]} />
          </Box>
          <Box sx={{ width: "20%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[1]} />
          </Box>
          <Box sx={{ width: "100%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[2]} />
          </Box>
          <Box sx={{ width: "20%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[3]} />
          </Box>
          <Box sx={{ width: "100%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[4]} />
          </Box>
          <Box sx={{ width: "20%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[5]} />
          </Box>
          <Box sx={{ width: "100%", paddingX: 0.15 }}>
            <LinearProgress variant="determinate" value={progressValues[6]} />
          </Box>
          <Box sx={{ width: "80%", paddingX: 0.15 }}>
            <LinearProgress variant={relaxing} value={progressValues[7]} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
