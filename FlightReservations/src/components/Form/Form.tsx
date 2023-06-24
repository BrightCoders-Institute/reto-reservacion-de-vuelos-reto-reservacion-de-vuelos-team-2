import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './FormStyles';
import { Button } from '../Button/Button';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { Title } from '../Title/Title';
import {SubTitle} from '../SubTitle/SubTitle';
import { Input } from '../Input/Input';

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
          <View style={styles.subTitleContainer}>
            <SubTitle isRequired={false}>
              <Title title='First Name' isSubTitle={true}/>
            </SubTitle>
            {touched.firstName && errors.firstName && (
              <Text style={styles.errorText}>
                  {errors.firstName}
                </Text>
              )}
          </View>
          <Input 
            onChange={handleChange('firstName')}
            value={values.firstName}
            kboardType='default'
          />
          <View style={styles.subTitleContainer}>
            <SubTitle>
              <Title title='Email' isSubTitle={true}/>
            </SubTitle>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>
                  {errors.email}
                </Text>
            )}
          </View>
          <Input 
            onChange={handleChange('email')}
            value={values.email}
            kboardType='email-address'
          />
          <View style={styles.subTitleContainer}>
            <SubTitle>
              <Title title='Password' isSubTitle={true}/>
            </SubTitle>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>
                  {errors.password}
              </Text>
            )}
          </View>
          <Input 
            onChange={handleChange('password')}
            value={values.password}
            kboardType='default'
          />
          <Button title="Sign up" onPress={handleSubmit}/>
        </>
       )}
     </Formik>
    </View>
  );
};