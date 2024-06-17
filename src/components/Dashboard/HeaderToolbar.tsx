"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useUser } from "@/src/context/User";
import { borderStyles } from "@/src/styles/theme";
import { CalendarMonth, LightMode, Notifications } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

export default function HeaderToolbar() {
  const { user } = useUser();
  return (
    <Box
      sx={{
        py: 1.5,
        pl: {
          xs: 1,
          md: 4,
        },
        pr: {
          xs: 1,
          md: 2,
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: borderStyles,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "grey.700",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LightMode sx={{ color: "warning.light" }} />
        {`Good morning, ${user.firstName}!`}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          size="small"
          placeholder="Quick search..."
          color="secondary"
        />
        <IconButton size="small" color="secondary">
          <CalendarMonth fontSize="small" />
        </IconButton>
        <IconButton size="small" color="secondary">
          <Notifications fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
