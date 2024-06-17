import IconButton from "@mui/material/IconButton";
import { Insights } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Logo({ isMinimized }: { isMinimized: boolean }) {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <IconButton
        size="small"
        sx={{
          color: "white",
          bgcolor: "primary.light",
          borderRadius: 2,
        }}
      >
        <Insights />
      </IconButton>
      {!isMinimized && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          DTEX
        </Typography>
      )}
    </Box>
  );
}
