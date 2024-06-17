import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, Card, Skeleton, Typography } from "@mui/material";
import { ReactNode } from "react";

type OverviewCardProps = {
  title: string;
  icon: ReactNode;
  isLoading: boolean;
  data?: {
    value: number;
    change: {
      percentage: number;
      positive: boolean;
    };
  };
};

export default function OverviewCard({
  title,
  icon,
  isLoading,
  data,
}: OverviewCardProps) {
  return (
    <Card>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Box>
      {!isLoading && !!data ? (
        <>
          <Typography variant="h4">{data.value}</Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: data.change.positive ? "success.main" : "error.main",
            }}
          >
            {data.change.positive ? (
              <AddCircleOutline />
            ) : (
              <RemoveCircleOutline />
            )}
            {data.change.percentage}%
          </Typography>
        </>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={100} />
      )}
    </Card>
  );
}
