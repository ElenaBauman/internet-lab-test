import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#f9fafb',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        gap: 4,
    },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    status: { fontSize: 12, color: '#6b7280', fontWeight: '600' },
    teams: { fontSize: 16, fontWeight: '600' },
    score: { fontSize: 20, fontWeight: '700' },
    noScore: { fontSize: 13, color: '#9ca3af' },
    date: { fontSize: 13, color: '#6b7280' },
});
