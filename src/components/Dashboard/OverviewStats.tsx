"use client";

import { useDashboard } from "@/src/context/Dashboard";
import { AddBusiness, People, PeopleAlt } from "@mui/icons-material";
import { Alert } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import OverviewCard from "./OverviewCard";
import { useOverviewStats } from "@/src/services/hooks/overview-stats";

const OVERVIEW_CARDS = [
  {
    title: "Total employees",
    icon: <People fontSize="small" />,
    id: "totalEmployees",
  },
  {
    title: "New employees",
    icon: <People fontSize="small" />,
    id: "newEmployees",
  },
  {
    title: "Resigned employees",
    icon: <PeopleAlt fontSize="small" />,
    id: "resignedEmployees",
  },
  {
    title: "Job applicants",
    icon: <AddBusiness fontSize="small" />,
    id: "jobApplicants",
  },
];
export default function OverviewStats() {
  const { range } = useDashboard();
  const { data, isLoading, isError } = useOverviewStats(range);

  if (isLoading)
    return (
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          width: "100%",
          pb: 1,
          px: {
            xs: 0.5,
            md: 1,
          },
        }}
      >
        {OVERVIEW_CARDS.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={3}>
            <OverviewCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              isLoading
            />
          </Grid>
        ))}
      </Grid>
    );

  if (isError)
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {
          "Failed to load data (JK, the error was thrown on purpose to test error handling)"
        }
      </Alert>
    );

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2 }}
      sx={{
        width: "100%",
        pb: 1,
        px: {
          xs: 0.5,
          md: 1,
        },
      }}
    >
      {data &&
        OVERVIEW_CARDS.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={3}>
            <OverviewCard
              title={card.title}
              icon={card.icon}
              data={data[card.id as keyof typeof data]}
            />
          </Grid>
        ))}
    </Grid>
  );
}
