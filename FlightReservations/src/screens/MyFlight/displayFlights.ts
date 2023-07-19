import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const displayFlights = () => {
  const user = auth().currentUser;
  console.log('user', user);
  const collectionRef = firestore().collection('Flights');
  collectionRef
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        console.log('Datos del documento:', data);
      });
    })
    .catch(error => {
      console.log('Error al obtener los datos de la colección:', error);
    });
};
