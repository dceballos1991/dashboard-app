"use client";
import { Box, Button, IconButton, Skeleton, Table } from "@mui/material";
import CardContainer from "./CardContainer";
import { Add } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { NewTask, useTodaysTasks } from "@/src/services/hooks/todays-tasks";
import TextField from "@mui/material/TextField";
import TaskRow from "./TaskRow";
import TasksHeader from "./TasksHeader";

const AddTaskButtonWithDialog = ({
  addTask,
}: {
  addTask: (task: NewTask) => void;
}) => {
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
    const newTask: NewTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.get("title") as string,
      dueDate: new Date(data.get("dueDate") as string),
      members: [],
    };
    addTask(newTask);
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
        <DialogTitle id="add-task-dialog-title">Add Task</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                autoFocus
                margin="dense"
                name="title"
                id="title"
                label="Title"
                type="text"
                fullWidth
                required
              />
              <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                <label htmlFor="dueDate">Due Date</label>
                <input type="date" id="dueDate" name="dueDate" required />
              </Box>
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

export default function TodayTasksCard() {
  const { data, addTask, isLoading, toggleCompleteTask } = useTodaysTasks();
  console.log(data);
  return (
    <CardContainer
      title="Today's Tasks"
      actionButton={<AddTaskButtonWithDialog addTask={addTask} />}
    >
      {!isLoading && data ? (
        <Table>
          <TasksHeader />
          {data.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              toggleCompleteTask={toggleCompleteTask}
            />
          ))}
        </Table>
      ) : (
        <Skeleton variant="rectangular" height={500} />
      )}
    </CardContainer>
  );
}
