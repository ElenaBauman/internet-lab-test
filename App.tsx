import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import dayjs from "dayjs";
import MatchesScreen from "@/screens/MatchesScreen";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 48,
        backgroundColor: '#fff',
    },
});

export default function App() {
    dayjs.locale('ru');

    return (
        <View style={ styles.root }>
          <MatchesScreen />
          <StatusBar style="auto" />
        </View>
  );
}
