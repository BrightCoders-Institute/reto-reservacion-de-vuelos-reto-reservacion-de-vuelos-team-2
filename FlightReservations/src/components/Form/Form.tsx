import React, { useState } from 'react';
import {View, TextInput, Text} from 'react-native';
import { styles } from './FormStyles';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Title } from '../Title/Title';

const data = {
  FormData: [
    {
      SubTitle: 'First Name',
      isPassword: false,
      kbordType: 'default',
    },
    {
      SubTitle: 'Email',
      isPassword: false,
      kbordType: 'default',
    },
    {
      SubTitle: 'Password',
      isPassword: true,
      kbordType: 'default',
    },
  ],
};
interface FormDataInterface {
  name: string;
  email: string;
  password: string;
}

const validatSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Password invalid'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const Form = () => {
  const [formData, setformData] = useState<FormDataInterface>({name: '', email: '', password: ''})
  return (
    <View>
      <Formik
       initialValues={{ email: '', password: '', firstName: ''}}
       validationSchema={validatSchema}
       onSubmit={values => console.log(values)}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         /* and other goodies */
       }) => (
        <>
          <Title title='First Name' isSubTitle={true}/>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('firstName')}
            value={values.firstName}
            keyboardType="default"
            />
          {touched.firstName && errors.firstName && (
            <Text style={styles.errorText}>
                {errors.firstName}
              </Text>
          )}
          <Title title='Email' isSubTitle={true}/>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>
                {errors.email}
              </Text>
          )}
          <Title title='Password' isSubTitle={true}/>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            value={values.password}
            keyboardType="default"
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>
                {errors.password}
              </Text>
          )}
          <Button title="Sign up" onPress={handleSubmit}/>
        </>
       )}
     </Formik>
    </View>
  );
};