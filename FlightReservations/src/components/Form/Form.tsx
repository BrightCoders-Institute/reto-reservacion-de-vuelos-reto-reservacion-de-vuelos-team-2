import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './FormStyles';
import {Button} from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';
import {Formik, useFormik} from 'formik';
import {Title} from '../Title/Title';
import {SubTitle} from '../SubTitle/SubTitle';
import {Input} from '../Input/Input';
import {Checkbox} from '../Checkbox/Checkbox';
import {signup} from '../../auth/SignUp';

const validatSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Password invalid'),
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
  checkbox: Yup.boolean().required(),
});

export const Form = () => {
  const navigation = useNavigation();
  const handleCheckboxChange = (checked: boolean) => {};
  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          checkbox: false,
        }}
        validationSchema={validatSchema}
        onSubmit={values => {
          signup({
            email: values.email,
            password: values.password,
            name: values.firstName,
          });

          navigation.navigate('MyFlight');
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          dirty,

          /* and other goodies */
        }) => (
          <>
            <View style={styles.subTitleContainer}>
              <SubTitle isRequired={false}>
                <Title title="First Name" isSubTitle={true} />
              </SubTitle>
              {touched.firstName && errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
            </View>
            <Input
              onChange={handleChange('firstName')}
              value={values.firstName}
              kboardType="default"
            />
            <View style={styles.subTitleContainer}>
              <SubTitle>
                <Title title="Email" isSubTitle={true} />
              </SubTitle>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <Input
              onChange={handleChange('email')}
              value={values.email}
              kboardType="email-address"
            />
            <View style={styles.subTitleContainer}>
              <SubTitle>
                <Title title="Password" isSubTitle={true} />
              </SubTitle>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Input
              onChange={handleChange('password')}
              value={values.password}
              kboardType="default"
              isPassword={true}
            />
            <View style={styles.margin}>
              <View style={styles.subTitleContainer}>
                <Checkbox
                  label="I agree to the Terms and Privacy Policy"
                  checked={values.checkbox}
                  onChange={handleCheckboxChange}
                />
                <Text style={styles.supScript}>*</Text>
              </View>
              <Checkbox
                label="Subscribe for select product updates"
                checked={false}
                onChange={handleCheckboxChange}
              />
            </View>
            <Button
              title="Sign up"
              onPress={handleSubmit}
              isDisabled={!dirty}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
