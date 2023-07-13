import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Card} from '../../components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styleMyflights';

const DATAEXAMPLE = [
  {
    id: '1',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
];

export const MyFlight = () => {
  const navigation = useNavigation();
  return (
    <>
      <Title title="My Flights" />
      <FlatList
        data={DATAEXAMPLE}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            stateOrigin={item.stateOrigin}
            stateDestination={item.stateDestination}
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
