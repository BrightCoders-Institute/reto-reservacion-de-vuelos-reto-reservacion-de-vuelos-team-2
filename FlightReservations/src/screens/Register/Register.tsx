import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { Title } from '../../components/Title/Title'
import { Form } from '../../components/Form/Form'
import { Button } from '../../components/Button/Button'
import { styles } from './RegisterStyles';
import { readData,registeUserAndSignIn } from '../../db/Firebase';

const Register = () => {
	//registeUserAndSignIn('jane.doe@example.com','SuperSecretPassword!')
	readData()
	
	return (
	<>
		<Title title="Sign Up" />
      
      <Form />
      <Text style={styles.text}>or</Text>
      <Button title="Sign up with Google" isGoogle={true}/>
			<View style={styles.containerLogin}>
				<Text>
					Alredy have an account? 
				</Text>
				<TouchableOpacity activeOpacity={0.6}>
					<Text style={styles.textLogin}>Log in</Text>
				</TouchableOpacity>
			</View>
	</>
	)
}

export default Register