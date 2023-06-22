import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../Input/Input';

const data = {
  FormData: [
    {
      SubTitle: 'First Name',
      isPassword: false,
      kbordType: 'default',
    },
    {
      SubTitle: 'Email',
      isPassword: false,
      kbordType: 'default',
    },
    {
      SubTitle: 'Password',
      isPassword: true,
      kbordType: 'default',
    },
  ],
};

export const Form = () => {
  return (
    <View>
      {data.FormData.map((item, index) => (
        <View>
          <Text>{item.SubTitle}</Text>
          <Input
            kboardType={item.kbordType}
            isPassword={item.isPassword}
            key={index}
          />
        </View>
      ))}
    </View>
  );
};
