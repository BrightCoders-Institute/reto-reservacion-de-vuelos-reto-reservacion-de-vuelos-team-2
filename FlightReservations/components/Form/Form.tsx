import React, { useState } from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import { styles } from './FormStyles';

import * as Yup from 'yup';
import { Formik } from 'formik';

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
  passwordLength: Yup.string()
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
          <Button title='submit' onPress={handleSubmit}/>
        </>
       )}
     </Formik>
      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => setformData({...formData, email: text})}
        value={formData.email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setformData({...formData, password: text})}
        value={formData.password}
        keyboardType="default"
        secureTextEntry={true}
      /> */}
    </View>
  );
};


// {data.FormData.map((item, index) => (
//   <View>
//     <Text>{item.SubTitle}</Text>
//     <Input
//       kboardType={item.kbordType}
//       isPassword={item.isPassword}
//       key={index}
      
//     />
//   </View>
// ))}