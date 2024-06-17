"use client";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Table,
  Typography,
} from "@mui/material";
import CardContainer from "./CardContainer";
import { Add } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Calendar from "./Calendar";

const AddEventButtonWithDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    handleClose();
  };

  return (
    <>
      <IconButton size="small" color="secondary" onClick={handleClickOpen}>
        <Add fontSize="small" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-task-dialog-title"
        aria-describedby="alert-task-dialog-description"
      >
        <DialogTitle id="add-task-dialog-title">Add Event</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="body2">Coming Soon</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button size="small" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button size="small" variant="contained" type="submit">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default function ScheduleCard() {
  return (
    <CardContainer title="Schedule" actionButton={<AddEventButtonWithDialog />}>
      <Calendar />
    </CardContainer>
  );
}
