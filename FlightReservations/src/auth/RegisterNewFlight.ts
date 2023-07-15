import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

interface NewFlight {
  estateOrigin: string;
  estateDestination: string;
  countryOrigin: string;
  countryDestination: string;
  date: string;
  tickets: string;
}

export const registerFlight = async (props: NewFlight) => {
  const user = auth().currentUser;

  const flightData = {
    stateOrigin: props.estateOrigin || '',
    stateDestination: props.estateDestination || '',
    countryOrigin: props.countryOrigin || '',
    countryDestination: props.countryDestination || '',
    date: props.date || '',
    tickets: props.tickets || '',
    user_id: user?.uid || '',
  };

  firestore()
    .collection('Flights')
    .doc()
    .set(flightData)
    .then(() => {
      Alert.alert('Flight added succesfully');
    })
    .catch(error => console.log(error));
};
