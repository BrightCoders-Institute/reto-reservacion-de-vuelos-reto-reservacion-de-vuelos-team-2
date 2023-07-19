import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyFlight} from '../../screens/MyFlight/MyFlight';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import BookingNavigation from '../../screens/Booking/BookingNavigation/BookingNavigation';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={BookingNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyFlight"
        component={MyFlight}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
