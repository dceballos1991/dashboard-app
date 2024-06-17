import { RangeType } from "../context/Dashboard";
import { sleep } from "../utils";

const getRandomData = () => {
  return {
    value: Math.floor(Math.random() * 100),
    change: {
      percentage: Math.floor(Math.random() * 100),
      positive: Math.random() > 0.5,
    },
  };
};

const makeOverviewStatsFixture = () => {
  return {
    totalEmployees: getRandomData(),
    newEmployees: getRandomData(),
    resignedEmployees: getRandomData(),
    jobApplicants: getRandomData(),
  };
};

export const getOverviewStats = async (_range: RangeType) => {
  await sleep(Math.random() * 1500);
  return makeOverviewStatsFixture();
};
