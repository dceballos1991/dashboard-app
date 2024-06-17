"use client";
import { RangeType, Ranges, useDashboard } from "@/src/context/Dashboard";
import { borderStyles } from "@/src/styles/theme";
import { CalendarMonth } from "@mui/icons-material";
import { Button, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";

export default function OverviewToolbar() {
  const { range, setRange } = useDashboard();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        gap: {
          xs: 1,
          md: 2,
        },
        alignItems: "center",
      }}
    >
      <Select
        value={range}
        onChange={(e) => setRange(e.target.value as RangeType)}
        color="secondary"
        size="small"
        label="Range"
      >
        <MenuItem value={Ranges.daily}>
          <CalendarMonth fontSize="small" />
          &nbsp; Daily
        </MenuItem>
        <MenuItem value={Ranges.weekly}>
          <CalendarMonth fontSize="small" />
          &nbsp; Weekly
        </MenuItem>
        <MenuItem value={Ranges.monthly}>
          <CalendarMonth fontSize="small" />
          &nbsp; Monthly
        </MenuItem>
      </Select>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button size="small" color="secondary" variant="outlined">
          Export
        </Button>
        <Button size="small" color="primary" variant="contained">
          New entry
        </Button>
      </Box>
    </Box>
  );
}
