import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress?: () => void;
}

export const Button = (props: Props) => {
  return (
    <TouchableOpacity style={styles.btn__container}>
      <Text style={styles.btn__text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
