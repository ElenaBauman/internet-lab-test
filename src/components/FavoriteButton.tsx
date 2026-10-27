import { Pressable, StyleSheet, Text } from 'react-native';
import {ADD_FROM_FAVORITE, FAVORITE, REMOVE_FROM_FAVORITE, UNFAVORABLE} from "@/constants/properties";

type Props = {
  active: boolean;
  onPress: () => void;
};

// Звёздочка «в избранное».
export function FavoriteButton({ active, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      accessibilityRole="button"
      accessibilityLabel={active ? REMOVE_FROM_FAVORITE : ADD_FROM_FAVORITE}
    >
      <Text style={[styles.star, active && styles.active]}>{active ? FAVORITE : UNFAVORABLE}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  star: {
    fontSize: 22,
    color: '#9ca3af',
  },
  active: {
    color: '#ef3124',
  },
});
