import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// TODO: Move to services and add a hook for the mock data
const events = [
  { day: "Monday", time: "9 AM", title: "Onboarding Session", color: "orange" },
  { day: "Monday", time: "1 PM", title: "Town Hall Meeting", color: "green" },
  { day: "Monday", time: "3 PM", title: "Recruitment Strategy", color: "red" },
  {
    day: "Tuesday",
    time: "10 AM",
    title: "Monthly Performance Review",
    color: "lightblue",
  },
  {
    day: "Wednesday",
    time: "9 AM",
    title: "Interview with David",
    color: "blue",
  },
  {
    day: "Wednesday",
    time: "1 PM",
    title: "Benefits Orientation",
    color: "green",
  },
  {
    day: "Thursday",
    time: "10 AM",
    title: "Interview for Marketing",
    color: "blue",
  },
  { day: "Friday", time: "10 AM", title: "Project Kickoff", color: "green" },
  { day: "Friday", time: "3 PM", title: "Performance Review", color: "green" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

const pastelColors = {
  orange: "#FFCC80",
  green: "#A5D6A7",
  red: "#EF9A9A",
  lightblue: "#90CAF9",
  blue: "#64B5F6",
};

const isToday = (day: string) => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return today === day;
};

const Calendar = () => {
  const theme = useTheme();

  return (
    <Box padding={2}>
      <Grid container>
        {/* Header Row */}
        <Grid item xs={1}>
          <Box
            sx={{
              height: "8.33%",
              borderBottom: "1px solid #e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              bgcolor: "grey.100",
            }}
          >
            <Typography variant="body2">TIME</Typography>
          </Box>
        </Grid>
        {days.map((day, dayIndex) => (
          <Grid item xs={2.2} key={dayIndex}>
            <Box
              sx={{
                height: "8.33%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: isToday(day)
                  ? "2px inset #FA5B3D"
                  : "1px solid #e0e0e0",
                bgcolor: isToday(day) ? "white" : "grey.100",
                padding: "16px",
              }}
            >
              <Typography
                variant="body2"
                data-testid={isToday(day) ? "today" : day}
              >
                {day}
              </Typography>
            </Box>
          </Grid>
        ))}

        {/* Time and Days columns */}
        {times.map((time, timeIndex) => (
          <Grid container key={timeIndex}>
            <Grid item xs={1}>
              <Box
                sx={{
                  height: "8.33%",
                  borderBottom: "1px solid #e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                <Typography variant="body2">{time}</Typography>
              </Box>
            </Grid>
            {days.map((day, dayIndex) => (
              <Grid item xs={2.2} key={dayIndex}>
                <Box
                  sx={{
                    height: "8.33%",
                    borderBottom: "1px solid #e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: events.some(
                      (event) => event.day === day && event.time === time
                    )
                      ? pastelColors[
                          events.find(
                            (event) => event.day === day && event.time === time
                          )?.color as keyof typeof pastelColors
                        ]
                      : "white",
                    padding: "16px",
                  }}
                >
                  {events.some(
                    (event) => event.day === day && event.time === time
                  ) && (
                    <Typography
                      variant="body2"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                        color: "grey.800",
                      }}
                    >
                      {
                        events.find(
                          (event) => event.day === day && event.time === time
                        )?.title
                      }
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calendar;
