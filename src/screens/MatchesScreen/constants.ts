import { Filter, MatchStatus } from "@/types";
import {
    ALL_MATCHES,
    FINISHED_MATCHES,
    STATUS_FINISHED,
    STATUS_LIVE,
    STATUS_POSTPONED,
    STATUS_SCHEDULED,
    UPCOMING_MATCHES
} from "@/constants/properties";

export const STATUS_LABEL: Record<MatchStatus, string> = {
    [MatchStatus.Finished]: STATUS_FINISHED,
    [MatchStatus.Live]: STATUS_LIVE,
    [MatchStatus.Scheduled]: STATUS_SCHEDULED,
    [MatchStatus.Postponed]: STATUS_POSTPONED,
};

type FilterT = {
    key: Filter;
    label: string;
}

export const FILTERS: FilterT[] = [
    {
        key: Filter.All,
        label: ALL_MATCHES
    },
    {
        key: Filter.Upcoming,
        label: UPCOMING_MATCHES
    },
    {
        key: Filter.Finished,
        label: FINISHED_MATCHES
    },
];
