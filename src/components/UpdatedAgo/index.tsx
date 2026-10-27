import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import dayjs, { Dayjs } from 'dayjs';
import {styles} from "@/components/UpdatedAgo/styles";
import {formatAgo} from "@/components/UpdatedAgo/utils";

type PropsT = {
  // Момент последней успешной загрузки данных.
  since: Dayjs;
};

// Подпись «Обновлено N сек назад».
export const UpdatedAgo = ({ since }: PropsT) => {
  const [seconds, setSeconds] = useState(() => dayjs().diff(since, 'second'));

  useEffect(() => {
    setSeconds(dayjs().diff(since, 'second'));

    const id = setInterval(() => {
      setSeconds(dayjs().diff(since, 'second'));
    }, 1000);

    return () => clearInterval(id);
  }, [since]);

  return <Text style={styles.text}>Обновлено {formatAgo(seconds)} назад</Text>;
}
