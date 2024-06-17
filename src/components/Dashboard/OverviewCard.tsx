"use client";
import { useDashboard } from "@/src/context/Dashboard";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, Card, Skeleton, Typography } from "@mui/material";
import { ReactNode } from "react";

type OverviewCardProps = {
  title: string;
  icon: ReactNode;
  isLoading?: boolean;
  data?: {
    value: number;
    change: {
      percentage: number;
      positive: boolean;
    };
  };
};

const mapRangeToLabel = {
  daily: "last day",
  weekly: "last week",
  monthly: "last month",
};

export default function OverviewCard({
  title,
  icon,
  isLoading,
  data,
}: OverviewCardProps) {
  const { range } = useDashboard();

  return (
    <Card
      sx={{
        color: "grey.500",
        p: 1,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      {!isLoading && !!data ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "grey.900" }}
          >
            {data.value}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: data.change.positive ? "success.main" : "error.main",
            }}
          >
            {data.change.positive ? (
              <AddCircleOutline fontSize="small" />
            ) : (
              <RemoveCircleOutline fontSize="small" />
            )}
            {data.change.percentage}%{" "}
            <Typography
              component="span"
              variant="caption"
              sx={{ color: "grey.500" }}
            >
              {mapRangeToLabel[range] ?? ""}
            </Typography>
          </Typography>
        </Box>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={"1.75em"} />
      )}
    </Card>
  );
}
