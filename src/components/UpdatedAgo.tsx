import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import {Dayjs} from "dayjs";

type Props = {
  // Момент последней успешной загрузки данных.
  since: Dayjs;
};

// Подпись «Обновлено N сек назад».
export function UpdatedAgo({ since }: Props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, []);

  return <Text style={styles.text}>Обновлено {seconds} сек назад</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color: '#6b7280',
  },
});
