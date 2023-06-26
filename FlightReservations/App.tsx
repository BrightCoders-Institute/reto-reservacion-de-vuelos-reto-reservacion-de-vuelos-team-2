import {View, Text} from 'react-native';
import React from 'react';
import {Title} from './src/components/Title/Title';
import {Checkbox} from './src/components/Checkbox/Checkbox';
import {Button} from './src/components/Button/Button';
import {Form} from './src/components/Form/Form';

export default function App() {

  return (
    <View>
      <Title title="Sign Up" />
      
      <Form />
      <Text style={{textAlign: 'center', marginVertical: 30}}>or</Text>
      <Button title="Sign up with Google" />
      <Text style={{textAlign: 'center', marginVertical: 30}}>
        Alredy have an account? Log in
      </Text>
      
    </View>
  );
}
