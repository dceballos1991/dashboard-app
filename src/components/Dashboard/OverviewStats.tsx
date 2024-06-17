import { useDashboard } from "@/src/context/Dashboard";
import { AddBusiness, People, PeopleAlt } from "@mui/icons-material";
import { Alert } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import OverviewCard from "./OverviewCard";

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
      <Grid2 columns={{ xs: 1, sm: 2, md: 4 }} gap={{ xs: 1, sm: 2 }}>
        {OVERVIEW_CARDS.map((card) => (
          <OverviewCard
            key={card.id}
            title={card.title}
            icon={card.icon}
            isLoading
          />
        ))}
      </Grid2>
    );

  if (isError) return <Alert severity="error">Failed to load data</Alert>;

  return (
    <Grid2 columns={{ xs: 1, sm: 2, md: 4 }} gap={{ xs: 1, sm: 2 }}>
      {OVERVIEW_CARDS.map((card) => (
        <OverviewCard
          key={card.id}
          title={card.title}
          icon={card.icon}
          data={data[card.id]}
        />
      ))}
    </Grid2>
  );
}
