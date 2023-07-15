import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyFlight} from '../../screens/MyFlight/MyFlight';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import BookingNavigation from '../../screens/Booking/BookingNavigation/BookingNavigation';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyFlight"
          component={MyFlight}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingNavigation}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Navigation;
