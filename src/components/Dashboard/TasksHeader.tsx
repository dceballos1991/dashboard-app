import React from "react";
import { TableHead, TableRow, TableCell, Typography } from "@mui/material";

const TasksHeader = () => {
  return (
    <TableHead
      sx={{
        bgcolor: "grey.100",
        "& span": {
          color: "grey.500",
          textTransform: "uppercase",
        },
      }}
    >
      <TableRow>
        <TableCell>
          <Typography variant="caption">Task</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="caption">Due</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="caption">Members</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="caption">Progress</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TasksHeader;
