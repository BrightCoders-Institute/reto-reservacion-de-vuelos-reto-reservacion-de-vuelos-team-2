import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title/Title';
import {Form} from '../../components/Form/Form';
import {Button} from '../../components/Button/Button';
import {styles} from './RegisterStyles';
import {googleAuth} from '../../auth/SignInWithGoogle';

const Register = () => {
  return (
    <>
      <Title title="Sign Up" />

      <Form />
      <Text style={styles.text}>or</Text>
      <Button
        title="Sign up with Google"
        isGoogle={true}
        onPress={googleAuth}
      />
      <View style={styles.containerLogin}>
        <Text>Alredy have an account?</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.textLogin}>Log in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Register;
