import {Filter, MatchesResponse, MatchStatus} from "@/types";
import dayjs from "dayjs";
import {DATETIME_FORMAT} from "@/constants/datetime";
import {DATE_IS_UNKNOWN} from "@/constants/properties";

export const formatDate = (iso: string | null): string => {
    if (!iso) {
        return DATE_IS_UNKNOWN;
    }

    const date = dayjs(iso);

    if (!date.isValid()) {
        return DATE_IS_UNKNOWN;
    }

    return date.format(DATETIME_FORMAT);
};

const UPCOMING: MatchStatus[] = [MatchStatus.Scheduled, MatchStatus.Live];

export const filterByStatus = (status: MatchStatus, filter: Filter) => {
    switch (filter) {
        case Filter.All:
            return true;
        case Filter.Finished:
            return status === MatchStatus.Finished;
        case Filter.Upcoming:
            return UPCOMING.includes(status);
    }
}

export const isMatchesResponse = (value: unknown): value is MatchesResponse => {
    return (
        typeof value === 'object' &&
        value !== null &&
        Array.isArray((value as { matches?: unknown }).matches)
    );
}
