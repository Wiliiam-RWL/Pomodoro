import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function StopDialog({ open, handleClose, stopTimer }) {
  const handleConfirmStop = () => {
    stopTimer();
    handleClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Stopping</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Stopping the timer will reset your Pomodoro Timer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmStop}>Stop Anyway</Button>
          <Button onClick={handleClose}>Continue Focusing</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
