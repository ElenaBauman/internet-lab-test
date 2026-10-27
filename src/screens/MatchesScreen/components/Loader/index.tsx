import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import { LOADING } from "@/constants/properties";

const Loader= () => {
    const { center, hint } = styles;

    return (
        <View style={ center }>
            <ActivityIndicator size="large" />
            <Text style={ hint }>{ LOADING }</Text>
        </View>
    );
};

export default Loader;
