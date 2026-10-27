import {Filter, MatchStatus} from "@/types";

// FOR REVIEWER: как по мне, очень странно, что у нас должен быть вывод времени с учетом часового пояса юзера, но в вопросе статуса мы верим данным с сервера
// как по мне, мы должны вычислять статус, сравнивая дату начала/окончания матча с текущей датой и временем юзера, либо считать все от серверной даты.
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
