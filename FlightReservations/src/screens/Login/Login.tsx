import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Title} from '../../components/Title/Title';
import {LoginForm} from '../../components/Form/LoginForm';
import {Button} from '../../components/Button/Button';
import {styles} from './LoginStyles';
import {googleAuth} from '../../auth/SignInWithGoogle';
import {NavigationType} from '../../../types/NavigationType';

export const Login = ({navigation}: NavigationType) => {
  return (
    <>
      <Title title="Log In" />

      <LoginForm navigation={navigation} />

      <Text style={styles.text}>or</Text>

      <Button
        title="Sign up with Google"
        isGoogle={true}
        onPress={() => googleAuth(navigation)}
      />

      <View style={styles.containerLogin}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textLogin}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
