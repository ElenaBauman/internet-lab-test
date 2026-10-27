import {Pressable, Text, View} from "react-native";
import {FILTERS} from "@/screens/MatchesScreen/constants";
import {styles} from "./styles";
import {Filter} from "@/types";
import {FC} from "react";

type PropsT = {
    filter: Filter;
    handleClick: (filter: Filter) => void;
}

const Filters:FC<PropsT> = ({ handleClick, filter }) => {
    const { container, chip, chipText, chipActive, chipTextActive} = styles;

    return (
        <View style={ container }>
            { FILTERS.map(({ key, label }) => (
                <Pressable
                    key={ key }
                    onPress={() => handleClick(key)}
                    style={[chip, filter === key && chipActive]}
                >
                    <Text style={[chipText, filter === key && chipTextActive]}>
                        { label }
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default Filters;
