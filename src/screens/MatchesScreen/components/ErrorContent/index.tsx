import { FC } from 'react';
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ERROR, RETRY } from "@/constants/properties";

type PropsT = {
    errorText: string,
    load: () => Promise<void>;
}

const ErrorContent:FC<PropsT> = ({ errorText, load }) => {
    const { center, error, retry, retryText } = styles;

    return (
        <View style={ center }>
            <Text style={ error }>{ ERROR } { errorText }</Text>
            <Pressable style={ retry } onPress={ () => load() }>
                <Text style={ retryText }>{ RETRY }</Text>
            </Pressable>
        </View>
    );
};

export default ErrorContent;
