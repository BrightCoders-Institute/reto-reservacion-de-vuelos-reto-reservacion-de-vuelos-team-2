import React from 'react';
import {View, Text, DimensionValue} from 'react-native';
import {styles} from './BookingStyles';

interface Props {
  title: string;
  width?: DimensionValue;
}

export const BookingTitle = (props: Props) => {
  return (
    <View style={[styles.container, {width: props.width}]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
