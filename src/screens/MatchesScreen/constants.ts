import {Filter, MatchStatus} from "@/types";

export const STATUS_LABEL: Record<MatchStatus, string> = {
    [MatchStatus.Finished]: 'Завершён',
    [MatchStatus.Live]: 'В игре',
    [MatchStatus.Scheduled]: 'Запланирован',
    [MatchStatus.Postponed]: 'Перенесён',
};

type FilterT = {
    key: Filter;
    label: string;
}

export const FILTERS: FilterT[] = [
    { key: Filter.All, label: 'Все' },
    { key: Filter.Upcoming, label: 'Предстоящие' },
    { key: Filter.Finished, label: 'Завершённые' },
];
