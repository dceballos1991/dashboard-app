import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function CardContainer({
  title,
  actionButton,
  children,
}: {
  title: string;
  actionButton?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card
      sx={{
        color: "grey.500",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        maxHeight: "500px",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        <Typography variant="subtitle2">{title}</Typography>
        {actionButton}
      </Box>
      {children}
    </Card>
  );
}
