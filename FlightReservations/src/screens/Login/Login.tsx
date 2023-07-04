import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/LoginForm';
import { Button } from '../../components/Button/Button';
import { styles } from './LoginStyles';

const Login = () => {
  return (
    <>
      <Title title="Log In" />

      <Form />

      <Text style={styles.text}>or</Text>

      <Button title="Log in with Google"/>

      <View style={styles.containerLogin}>
        <Text>
          Don't have an account?
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.textLogin}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
