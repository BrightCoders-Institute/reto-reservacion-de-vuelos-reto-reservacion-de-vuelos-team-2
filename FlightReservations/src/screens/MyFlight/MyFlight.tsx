import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Card} from '../../components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styleMyflights';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const MyFlight = () => {
  const [flights, setFlights] = useState([]);
  const navigation = useNavigation();
  const user = auth().currentUser;
  console.log('user', user.uid);
  const collectionRef = firestore().collection('Flights');
  collectionRef
    .get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.forEach(documentSnapshot => {
        data.push(documentSnapshot.data());
      });
      console.log('data', data);

      const dataFlights = data.filter(item => item.user_id === user.uid);
      console.log('arrayFiltrado2', dataFlights);

      setFlights(dataFlights);
    })
    .catch(error => {
      console.log('Error al obtener los datos de la colección:', error);
    });
  return (
    <>
      <Title title="My Flights" />
      <FlatList
        data={flights}
        keyExtractor={item => item.identifier}
        renderItem={({item}) => (
          <Card
            estateOrigin={item.stateOrigin}
            estateDestination={item.stateDestination}
            countryOrigin={item.countryOrigin}
            countryDestination={item.countryDestination}
            date={item.date}
            tickets={item.tickets}
          />
        )}
      />
      <TouchableOpacity
        style={styles.bntFloating}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Booking')}>
        <Icon name="plus" size={50} color="white" />
      </TouchableOpacity>
    </>
  );
};
export default MyFlight;
