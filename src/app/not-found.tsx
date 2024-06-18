import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        textAlign: "center",
        height: "100%",
        justifyContent: "center",
        mb: 15,
      }}
    >
      <Typography variant="h4">Coming Soon</Typography>
      <Link href="/" component={NextLink}>
        <Typography variant="subtitle1" color="primary">
          Return to Dashboard
        </Typography>
      </Link>
    </Box>
  );
}
