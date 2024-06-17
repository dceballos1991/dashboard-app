import { borderStyles } from "@/src/styles/theme";
import Box from "@mui/material/Box";
import OverviewToolbar from "./OverviewToolbar";

export default function OverviewSection() {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        gap: {
          xs: 1,
          md: 2,
        },
        alignItems: "center",
        bgcolor: "grey.50",
        borderBottom: borderStyles,
        p: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <OverviewToolbar />
      {/* <OverviewStats /> */}
    </Box>
  );
}
