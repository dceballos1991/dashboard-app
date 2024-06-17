import React from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  Typography,
  Avatar,
  AvatarGroup,
  LinearProgress,
  Box,
} from "@mui/material";
import { Task } from "@/src/services/todays-tasks";

interface TaskRowProps {
  task: Task;
  toggleCompleteTask: (taskId: string) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, toggleCompleteTask }) => {
  return (
    <TableRow>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={task.isCompleted}
            onChange={() => toggleCompleteTask(task.id)}
          />
          <Typography variant="body2">{task.title}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{task.dueDate.toDateString()}</Typography>
      </TableCell>
      <TableCell>
        <AvatarGroup max={4}>
          {task.members.map((member) => (
            <Avatar
              key={member.id}
              alt={member.name}
              sx={{
                width: 24,
                height: 24,
                fontSize: 12,
              }}
            >
              {member.name[0]}
            </Avatar>
          ))}
        </AvatarGroup>
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Box width="100px" mr={2}>
            <LinearProgress variant="determinate" value={task.progress} />
          </Box>
          <Typography variant="body2">{task.progress}%</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
