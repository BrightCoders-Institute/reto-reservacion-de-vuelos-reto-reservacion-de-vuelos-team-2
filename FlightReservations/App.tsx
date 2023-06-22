import {View, Text} from 'react-native';
import React from 'react';
import {Title} from './components/Title/Title';
import {Checkbox} from './components/Checkbox/Checkbox';
import {Button} from 'react-native-elements';
import {Form} from './components/Form/Form';

export default function App() {
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  return (
    <View>
      <Title title="Sign Up" />
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
      <Form />
      {/* <Button title="Sign up" /> */}
    </View>
  );
}
