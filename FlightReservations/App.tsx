import React from 'react';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/components/Navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
