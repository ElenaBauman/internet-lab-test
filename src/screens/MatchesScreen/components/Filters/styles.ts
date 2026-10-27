import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flexDirection: 'row', gap: 8, marginBottom: 8 },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: '#f3f4f6',
    },
    chipActive: { backgroundColor: '#111827' },
    chipText: { color: '#111827' },
    chipTextActive: { color: '#fff' },
});
