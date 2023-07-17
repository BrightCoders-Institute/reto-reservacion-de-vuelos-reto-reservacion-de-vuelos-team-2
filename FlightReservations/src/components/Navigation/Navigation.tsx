import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/Login/Login';
import {MyFlight} from '../../screens/MyFlight/MyFlight';
import {Booking} from '../../screens/Booking/Booking';
import {Register} from '../../screens/Register/Register';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          // *Para quietar sombra en header ANDROID
          elevation: 0,
          //  *Para quietar sombra en header IOS
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
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyFlight"
        component={MyFlight}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
