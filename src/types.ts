export enum MatchStatus {
    Finished = "finished",
    Live = "live",
    Scheduled = "scheduled",
    Postponed = "postponed",
}

export type Team = {
    id: string;
    name: string;
    city: string;
};

export type Score = {
    home: number;
    away: number;
};

export type Match = {
    id: string;
    startsAt: string | null;
    status: MatchStatus;
    minute?: number;
    home: Team;
    away: Team;
    score: Score | null;
};

export type MatchesResponse = {
    round: number;
    matches: Match[];
};

export enum Filter {
    All = 'all',
    Upcoming = 'upcoming',
    Finished = 'finished',
}
