import { Pressable, Text, View } from "react-native";
import { UpdatedAgo } from "@/components/UpdatedAgo";
import { styles } from "./styles";
import { FC } from "react";
import { REFRESH } from "@/constants/properties";
import { Dayjs } from "dayjs";

type PropsT = {
    handleRefresh: () => void;
    updatedAt: Dayjs;
}

const Header: FC<PropsT> = ({ updatedAt, handleRefresh }) => {
    const { container, refreshBtn, refreshText } = styles;

    return (
        <View style={ container }>
            <UpdatedAgo since={ updatedAt }/>
            <Pressable onPress={handleRefresh } style={ refreshBtn }>
                <Text style={ refreshText }>{ REFRESH }</Text>
            </Pressable>
        </View>
    );
};

export default Header;
