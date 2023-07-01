import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/Form';
import {Button} from '../../components/Button/Button';
import {styles} from './RegisterStyles';
import {useNavigation} from '@react-navigation/native';

export const Register = () => {
  const navigation = useNavigation();
  return (
    <>
      <Title title="Sign Up" />

      <Form />
      <Text style={styles.text}>or</Text>
      <Button title="Sign up with Google" isGoogle={true} />
      <View style={styles.containerLogin}>
        <Text>Alredy have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.textLogin}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
