import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import {API_URL} from '@env';
import { addUserInfo } from '../db/AddUserInfo';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

GoogleSignin.configure({
  webClientId: API_URL
});

export const googleAuth = async () => {
	try {
  	const { idToken } = await GoogleSignin.signIn();
  	const googleCredential = auth.GoogleAuthProvider.credential(idToken);
		const {user} = await auth().signInWithCredential(googleCredential);

		firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          Alert.alert('Signin')
        } else {
          addUserInfo(user);
        }
      })
      .catch(error => console.log('error de usuario existe', error));

	} catch (error: unknown) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				Alert.alert('Error', 'Login cancelled');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				Alert.alert('operation (sign in) is in progress already: ');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				Alert.alert('play services not available or outdated: ');
			} else {
				Alert.alert('Error', error.toString());
			}
			console.log(error);
	}
}
