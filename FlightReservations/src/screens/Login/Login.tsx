import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/LoginForm';
import {Button} from '../../components/Button/Button';
import {styles} from './LoginStyles';
import {useNavigation} from '@react-navigation/native';

export const Login = () => {
  const navigation = useNavigation();
  return (
    <>
      <Title title="Log In" />

      <Form />

      <Text style={styles.text}>or</Text>

      <Button title="Log in with Google" isGoogle={true} />

      <View style={styles.containerLogin}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textLogin}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
