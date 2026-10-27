import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { MATCHES_URL } from '@/config';
import { Filter, Match} from '@/types';
import { isMatchesResponse, filterByStatus } from "./utils";
import { styles } from "./styles";
import ErrorContent from "./components/ErrorContent";
import Loader from "./components/Loader";
import Filters from "./components/Filters";
import Matches from "./components/Matches";
import Header from "./components/Header";
import { RESPONSE_ERROR, FETCH_ERROR, NO_MATCHES, TITLE } from "@/constants/properties";
import dayjs from "dayjs";
import { useFavorites } from "@/hooks/useFavorites";

const MatchesScreen = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState(Filter.All);
    const [updatedAt, setUpdatedAt] = useState(() => dayjs());
    const { isFavorite, toggle } = useFavorites();
    const { container, title, center, hint } = styles;

    const load = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(MATCHES_URL);

            if (!res.ok) {
                setError(`HTTP ${res.status}`);
            } else {
                const json: unknown = await res.json();

                if (!isMatchesResponse(json)) {
                    setError(RESPONSE_ERROR);
                } else {
                    setMatches(json.matches);
                    setUpdatedAt(dayjs());
                }
            }
        } catch (e) {
            setError(e instanceof Error ? e.message : FETCH_ERROR);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleFilter = (filter: Filter) => {
        setFilter(filter)
    }

    const handleRefresh = () => {
        load().then();
    }

    const filteredMatches = useMemo(
        () => matches.filter(({ status }) => filterByStatus(status, filter)),
        [matches, filter],
    );

    useEffect(() => {
        load().then();
    }, []);

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    if (error) {
        return (
            <ErrorContent load={ load } errorText={ error }/>
        );
    }

    return (
        <View style={ container }>
            <Text style={ title }>{ TITLE }</Text>
            <Filters filter={ filter } handleClick={ handleFilter }/>
            <Header updatedAt={ updatedAt } handleRefresh={ handleRefresh }/>
            {!!filteredMatches.length ? (
                <Matches
                    matches={ filteredMatches }
                    handleRefresh={ handleRefresh }
                    isLoading={ isLoading }
                    isFavorite={ isFavorite }
                    toggle={ toggle }
                />
            ) : (
                <View style={ center }>
                    <Text style={ hint }>{ NO_MATCHES }</Text>
                </View>
            )}
        </View>
    );
};

export default MatchesScreen;
