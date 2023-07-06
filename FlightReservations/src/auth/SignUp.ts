import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {addUserInfo} from '../db/AddUserInfo';

interface SignUpInterface {
  email: string;
  password: string;
  name: string;
}

export const signup = async ({email, password, name}: SignUpInterface) => {
  try {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    const addUser = await addUserInfo(user, name);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('The email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('The email address is invalid!');
    }
  }
};
