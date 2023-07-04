import React from 'react';
import {FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import {Title} from '../../components/Title/Title';
import { Card } from '../../components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DATAEXAMPLE = [
  {
    id: '1',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '2',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '3',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '4',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '6',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '7',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '8',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
  {
    id: '9',
    estateOrigin:'beg',
    estateDestination:'ams',
    countryOrigin:'Serbia',
    countryDestination:'Netherlands',
    date:'September 3, 2020',
    tickets:'2',
  },
];

export const MyFlight = () => {
  return (
    <>
      <Title title="My Flights" />
      <FlatList
        data={DATAEXAMPLE}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          <Card 
            estateOrigin={item.estateOrigin}
            estateDestination={item.estateDestination}
            countryOrigin={item.countryOrigin}
            countryDestination={item.countryDestination}
            date={item.date}
            tickets={item.tickets}
          />
        }
        
      />
      <TouchableOpacity 
        style={styles.bntFloating}
        activeOpacity={0.8} 
      >
        <Icon name="plus" size={50} color='white'/>
      </TouchableOpacity>
    </>
  );
};


export const styles = StyleSheet.create({
    bntFloating:{
      backgroundColor: '#5974F5',
      position: 'absolute',
      borderRadius: 50,
      padding: 10,
      bottom: 15,
      left: '40%', 
    },
    
  });

