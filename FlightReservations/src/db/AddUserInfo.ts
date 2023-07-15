import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const navigation = useNavigation();

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
      navigation.navigate('Login');
    })
    .catch(error => console.log(error));
};
