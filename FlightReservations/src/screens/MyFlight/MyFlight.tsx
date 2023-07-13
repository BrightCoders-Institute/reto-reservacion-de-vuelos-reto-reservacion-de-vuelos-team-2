import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Title} from '../../components/Title/Title';
import {Card} from '../../components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

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
  {
    id: '2',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '3',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '4',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '6',
    stateOrigin: 'beg',
    structuredClonetateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '7',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '8',
    stateOrigin: 'beg',
    stateDestination: 'ams',
    countryOrigin: 'Serbia',
    countryDestination: 'Netherlands',
    date: 'September 3, 2020',
    tickets: '2',
  },
  {
    id: '9',
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

export const styles = StyleSheet.create({
  bntFloating: {
    backgroundColor: '#5974F5',
    position: 'absolute',
    borderRadius: 50,
    padding: 10,
    bottom: 15,
    left: '40%',
  },
});
