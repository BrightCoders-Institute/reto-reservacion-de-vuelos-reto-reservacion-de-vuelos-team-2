import {View, Text} from 'react-native';
import React from 'react';
import {Title} from './src/components/Title/Title';
import {Checkbox} from './src/components/Checkbox/Checkbox';
import {Button} from './src/components/Button/Button';
import {Form} from './src/components/Form/Form';
import Register from './src/screens/Register';

export default function App() {

  return (
    <View>
      <Register/>
    </View>
  );
}
