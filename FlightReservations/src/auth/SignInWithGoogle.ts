import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {API_URL} from '@env';
import {addUserInfo} from '../db/AddUserInfo';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {NavigationType} from '../../types/NavigationType';
GoogleSignin.configure({
  webClientId: API_URL,
});
console.log(API_URL);
export const googleAuth = async (navigation: NavigationType) => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const {user} = await auth().signInWithCredential(googleCredential);

    firestore()
      .collection('Users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          navigation.navigate('MyFlight');
        } else {
          addUserInfo(user, navigation);
        }
      })
      .catch(error => Alert.alert('Error de Usuario'));
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Error', 'Login cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('operation (sign in) is in progress already: ');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('play services not available or outdated: ');
    } else {
      Alert.alert('Error', error.toString());
    }
  }
};
