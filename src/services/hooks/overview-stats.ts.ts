import { RangeType } from "@/src/context/Dashboard"
import { getOverviewStats } from "../overview-stats"

export const useOverviewStats = (range: RangeType) => {
    const { data, isLoading, isError } = getOverviewStats(range)
    return { data, isLoading, isError }
    }
