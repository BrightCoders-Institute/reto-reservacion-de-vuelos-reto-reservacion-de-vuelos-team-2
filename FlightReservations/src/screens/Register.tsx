import { Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { Title } from '../components/Title/Title'
import { Form } from '../components/Form/Form'
import { Button } from '../components/Button/Button'

const Register = () => {
	return (
	<>
		<Title title="Sign Up" />
      
      <Form />
      <Text style={{textAlign: 'center', marginVertical: 30}}>or</Text>
      <Button title="Sign up with Google" />
      <Text style={{textAlign: 'center', marginVertical: 30}}>
        Alredy have an account? <TouchableOpacity><Text>Log in</Text></TouchableOpacity>
      </Text>
	</>
	)
}

export default Register