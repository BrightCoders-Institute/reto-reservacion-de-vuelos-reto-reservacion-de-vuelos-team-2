import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BookingNavigation from './BookingNavigation/BookingNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const Booking = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <BookingNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Booking;
