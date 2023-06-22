import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {styles} from './InputStyles';
interface props {
  kboardType: any;
  isPassword?: boolean;
}
export const Input = ({kboardType, isPassword = false}: props) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType={kboardType}
        secureTextEntry={isPassword}
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="default"
        secureTextEntry={true}
      /> */}
    </View>
  );
};
