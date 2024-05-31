import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { List, ListItem, ListItemIcon } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AboutDialog({ open = false, handleClose }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"How to use Pomodoro?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. It is named after the
            tomato-shaped kitchen timer that Cirillo used as a university
            student. The technique uses a timer to break work into intervals,
            traditionally 25 minutes in length, separated by short breaks. Each
            interval is known as a "Pomodoro," from the Italian word for
            "tomato." The basic steps of the Pomodoro Technique include:
          </DialogContentText>
          <List>
            <ListItem>
              1. Choosing a Task: Pick a task you want to work on.
            </ListItem>
            <ListItem>
              2. Pomodoro Timer: Set the timer for 25 minutes, and start working
              on the task without interruption.
            </ListItem>
            <ListItem>
              3. Setting the Working on the Task: Work on the task until the
              timer rings. If a distraction pops up, write it down and get back
              to the task.
            </ListItem>
            <ListItem>
              4. Ending Work When the Timer Rings: Once the timer rings, put a
              checkmark on a piece of paper.
            </ListItem>
            <ListItem>
              5. Taking a Short Break: Take a short break (5 minutes is common),
              which helps to reset your mind before starting another Pomodoro.
            </ListItem>
            <ListItem>
              6. Taking a Longer Break: After completing four Pomodoros, take a
              longer break (15-30 minutes), which helps to recharge and maintain
              high productivity levels throughout the day.
            </ListItem>
          </List>
          <DialogContentText>
            The Pomodoro Technique helps users concentrate and avoid burnout by
            managing work and rest periods effectively. It is widely adopted in
            various professional and personal contexts to increase productivity
            while maintaining a balanced approach to task management.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Have a try</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
