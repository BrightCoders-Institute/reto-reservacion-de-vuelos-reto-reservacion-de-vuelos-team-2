import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/Login/Login';
import {MyFlight} from '../../screens/MyFlight/MyFlight';
import {Booking} from '../../screens/Booking/Booking';
import {Register} from '../../screens/Register/Register';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} options={{title: ''}} />
      <Stack.Screen
        name="MyFlight"
        component={MyFlight}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
