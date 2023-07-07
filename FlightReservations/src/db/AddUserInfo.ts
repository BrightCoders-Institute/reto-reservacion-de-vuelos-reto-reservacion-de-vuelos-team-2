import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const addUserInfo = (
  {uid, displayName, email}: FirebaseAuthTypes.User,
  name?: string,
) => {
  if (name !== undefined) displayName = name;
  firestore()
    .collection('Users')
    .doc(uid)
    .set({
      firstName: displayName,
      email: email,
      uid: uid,
      type: '',
    })
    .then(() => {
      Alert.alert('User added succesfully');
    })
    .catch(error => console.log(error));
};
