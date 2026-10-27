import {FlatList, RefreshControl} from "react-native";
import {Match as MatchT} from "@/types";
import Match from "./Match";
import { FC } from "react";
import {styles} from "./styles";

type PropsT = {
    matches: MatchT[];
    handleRefresh: () => void;
    isLoading: boolean;
    isFavorite: (id: string) => boolean;
    toggle: (id: string) => void;
}

const Matches:FC<PropsT> = (props) => {
    const { matches, isLoading, handleRefresh, isFavorite, toggle } = props;

    return (
        <FlatList
            data={matches}
            keyExtractor={({ id }) => id}
            contentContainerStyle={ styles.container }
            refreshControl={
                <RefreshControl refreshing={ isLoading } onRefresh={ handleRefresh } />
            }
            renderItem={({ item }) => (
                <Match match={ item } isFavorite={isFavorite} toggle={toggle}/>
            )}
        />
    );
};

export default Matches;
