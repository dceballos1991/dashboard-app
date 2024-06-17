import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { ChevronRight } from "@mui/icons-material";

export default function SidebarToggle({
  isMinimized,
  onToggle,
}: {
  isMinimized: boolean;
  onToggle: () => void;
}) {
  return (
    <IconButton
      color="primary"
      size="small"
      onClick={onToggle}
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      {isMinimized ? (
        <ChevronRight />
      ) : (
        <ChevronRight sx={{ transform: "rotate(180deg)" }} />
      )}
    </IconButton>
  );
}
