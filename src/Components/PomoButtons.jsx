import { Button, ButtonGroup } from "@mui/material";

export default function PomoButtons({
  handleStartRunning,
  handlePausing,
  handleStopping,
  handleSkipping,
  timerState,
}) {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="button group"
        size="large"
        color="secondary"
        fullWidth
      >
        <Button
          onClick={handleSkipping}
          color={timerState === "Stopping" ? "disabled" : "secondary"}
        >
          Skip
        </Button>
        {timerState === "Stopping" ? (
          <Button color="secondary" onClick={handleStartRunning}>
            Start
          </Button>
        ) : timerState === "Running" ? (
          <Button color="secondary" onClick={handlePausing}>
            Pause
          </Button>
        ) : (
          <Button color="secondary" onClick={handleStartRunning}>
            Resume
          </Button>
        )}
        <Button
          onClick={handleStopping}
          color={timerState === "Stopping" ? "disabled" : "secondary"}
        >
          Stop
        </Button>
      </ButtonGroup>
    </>
  );
}
