import {View} from 'react-native';
import React from 'react';
import Login from './src/screens/Login/Login';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Login />
      </View>
    </Provider>
  );
}
