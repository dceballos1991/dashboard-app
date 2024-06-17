import { borderStyles } from "@/src/styles/theme";
import Box from "@mui/material/Box";
import OverviewToolbar from "./OverviewToolbar";
import OverviewStats from "./OverviewStats";

export default function OverviewSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: 1,
          md: 2,
        },
        alignItems: "center",
        bgcolor: "grey.50",
        borderBottom: borderStyles,
        pt: 1,
      }}
    >
      <OverviewToolbar />
      <OverviewStats />
    </Box>
  );
}
