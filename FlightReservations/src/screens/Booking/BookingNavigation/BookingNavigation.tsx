import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {From} from '../views/From/From';
import {To} from '../views/To/To';
import {Date} from '../views/Date/Date';
import {Passengers} from '../views/Passengers/Passengers';
import {Results} from '../views/Results/Results';

const Booking = createStackNavigator();

function BookingNavigation() {
  return (
    <Booking.Navigator>
      <Booking.Screen name="From" component={From} options={{title: ''}} />
      <Booking.Screen name="To" component={To} options={{title: ''}} />
      <Booking.Screen name="Date" component={Date} options={{title: ''}} />
      <Booking.Screen
        name="Passengers"
        component={Passengers}
        options={{title: ''}}
      />
      <Booking.Screen
        name="Results"
        component={Results}
        options={{
          title: '',
        }}
      />
    </Booking.Navigator>
  );
}

export default BookingNavigation;
