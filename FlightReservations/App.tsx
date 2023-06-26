import {View, Text} from 'react-native';
import React from 'react';
import {Title} from './src/components/Title/Title';
import {Checkbox} from './src/components/Checkbox/Checkbox';
import {Button} from './src/components/Button/Button';
import {Form} from './src/components/Form/Form';

export default function App() {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <View>
      <Title title="Sign Up" />
      
      <Form />
      <Checkbox
        label="I agree to the Terms and Privacy Policy"
        checked={false}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Subscribe for select product updates"
        checked={false}
        onChange={handleCheckboxChange}
      />
      <Text style={{textAlign: 'center', marginVertical: 30}}>or</Text>
      <Button title="Sign up with Google" />
      <Text style={{textAlign: 'center', marginVertical: 30}}>
        Alredy have an account? Log in
      </Text>
      
    </View>
  );
}
