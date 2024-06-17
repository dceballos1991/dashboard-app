import { RangeType } from "@/src/context/Dashboard";
import { getOverviewStats } from "../overview-stats";
import { useMockedApi } from "@/src/utils";
import { useCallback } from "react";

export const useOverviewStats = (range: RangeType) => {
  const fetchData = useCallback(() => getOverviewStats(range), [range]);
  const { data, isLoading, isError } = useMockedApi(fetchData);
  return { data, isLoading, isError };
};
