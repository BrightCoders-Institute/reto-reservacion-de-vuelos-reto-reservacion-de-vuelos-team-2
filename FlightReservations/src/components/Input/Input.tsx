import React, { useState } from 'react';
import {TextInput, View, KeyboardTypeOptions} from 'react-native';
import {styles} from './InputStyles';

interface props {
  kboardType: KeyboardTypeOptions;
  isPassword?: boolean;
  value: string;
  onChange: (text: string) => void;
};

export const Input = ({kboardType, isPassword = false, onChange, value}: props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <View>
      <TextInput
        style={isFocus ? styles.onFocusInput : styles.input}
        onChangeText={onChange}
        value={value}
        keyboardType={kboardType}
        secureTextEntry={isPassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};
