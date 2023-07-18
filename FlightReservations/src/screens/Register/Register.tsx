import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/Form';
import {Button} from '../../components/Button/Button';
import {styles} from './RegisterStyles';
import {googleAuth} from '../../auth/SignInWithGoogle';
import {NavigationType} from '../../../types/NavigationType';

const Register = ({navigation}: NavigationType) => {
  return (
    <>
      <Title title="Sign Up" />

      <Form navigation={navigation} />
      <Text style={styles.text}>or</Text>
      <Button
        title="Sign up with Google"
        isGoogle={true}
        onPress={() => googleAuth(navigation)}
      />
      <View style={styles.containerLogin}>
        <Text style={styles.text}>Alredy have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textLogin}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Register;
