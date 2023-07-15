import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './FormStyles';
import {Button} from '../Button/Button';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {Title} from '../Title/Title';
import {SubTitle} from '../SubTitle/SubTitle';
import {Input} from '../Input/Input';

import {useNavigation} from '@react-navigation/native';

const validatSchema = Yup.object().shape({
  password: Yup.string().required('Password invalid'),
  email: Yup.string().email('Invalid email').required('Required'),
  checkbox: Yup.boolean().required(),
});

export const Form = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Formik
        initialValues={{email: '', password: '', checkbox: false}}
        validationSchema={validatSchema}
        onSubmit={() => {
          navigation.navigate('MyFlight');
        }}>
        {({values, errors, touched, handleChange, handleSubmit, dirty}) => (
          <>
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
                <Text style={styles.supScript}>*</Text>
              </View>
            </View>

            <Button title="Log in" onPress={handleSubmit} isDisabled={!dirty} />
          </>
        )}
      </Formik>
    </View>
  );
};
