import Grid from "@mui/material/Unstable_Grid2";
import TodayTasksCard from "./TodayTasksCard";
import { Box } from "@mui/material";
import ScheduleCard from "./ScheduleCard";

export default function MainGrid() {
  return (
    <Box
      sx={{
        p: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid xs={12} md={6}>
          <TodayTasksCard />
        </Grid>
        <Grid xs={12} md={6}>
          <ScheduleCard />
        </Grid>
        {/* 
      <Grid xs={12}>
        <Employees />
      </Grid>
      <Grid xs={12}>
        <EmployeePayrolls />
      </Grid> */}
      </Grid>
    </Box>
  );
}
