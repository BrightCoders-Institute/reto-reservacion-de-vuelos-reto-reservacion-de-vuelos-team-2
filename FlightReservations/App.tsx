import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import {Login} from './src/screens/Login/Login';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {Navigation} from './src/components/Navigation/Navigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black'
  },
};


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
