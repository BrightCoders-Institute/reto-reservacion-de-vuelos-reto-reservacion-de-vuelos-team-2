import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {From} from '../views/From/From';
import {To} from '../views/To/To';
import {Date} from '../views/Date/Date';
import {Passengers} from '../views/Passengers/Passengers';
import {Results} from '../views/Results/Results';

const Stack = createStackNavigator();

function BookingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="From"
        component={From}
        options={{title: 'Booking Flight'}}
      />
      <Stack.Screen name="To" component={To} options={{title: ''}} />
      <Stack.Screen name="Date" component={Date} options={{title: ''}} />
      <Stack.Screen
        name="Passengers"
        component={Passengers}
        options={{title: ''}}
      />
      <Stack.Screen name="Results" component={Results} options={{title: ''}} />
    </Stack.Navigator>
  );
}

export default BookingNavigation;
