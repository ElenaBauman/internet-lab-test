import { Text, View } from "react-native";
import { STATUS_LABEL } from "@/screens/MatchesScreen/constants";
import { Match as MatchT, MatchStatus } from "@/types";
import { FavoriteButton } from "@/components/FavoriteButton";
import { formatDate } from "@/screens/MatchesScreen/utils";
import { styles } from "./styles";
import { FC } from "react";
import { NO_SCORE } from "@/constants/properties";

type PropsT = {
    match: MatchT;
    isFavorite: (id: string) => boolean;
    toggle: (id: string) => void;
}

const Match: FC<PropsT> = (props) => {
    const {
        match: { id, status, minute, home, away, score, startsAt },
        isFavorite,
        toggle
    } = props;
    const {
        container,
        header,
        status: styledStatus,
        teams,
        score: styledScore,
        noScore,
        date
    } = styles;

    return (
        <View style={ container }>
            <View style={ header }>
                <Text style={ styledStatus }>
                    { STATUS_LABEL[status] }
                    { status === MatchStatus.Live && minute != null ? ` · ${minute}'` : '' }
                </Text>
                <FavoriteButton
                    active={ isFavorite(id) }
                    onPress={ () => toggle(id) }
                />
            </View>
            <Text style={ teams }>
                { home.name } — { away.name }
            </Text>
            { score ? (
                <Text style={ styledScore }>
                    { score.home} : { score.away }
                </Text>
            ) : (
                <Text style={ noScore }>{ NO_SCORE }</Text>
            )}
            <Text style={ date }>{ formatDate(startsAt) }</Text>
        </View>
    );
};

export default Match;
