import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
}

export const Title = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};
