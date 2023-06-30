import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const readData = () => {
  firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
};


export const registeUserAndSignIn = (emil, password) => {

  auth()
    .createUserWithEmailAndPassword(emil, password)
    .then((item) => {
      console.log('User account created & signed in!');
      console.log('ITEM', item)
      console.log('item.additionalUserInfo', item.additionalUserInfo)
      console.log('item.user', item.user)
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
}

