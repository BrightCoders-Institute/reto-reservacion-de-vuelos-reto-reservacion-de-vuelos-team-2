import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../Button/styles';

interface Props {
  title: string;
}

export const Button = (props: Props) => {
  return (
    <View style={styles.btn__container}>
      <Button title={props.title} />
    </View>
  );
};
