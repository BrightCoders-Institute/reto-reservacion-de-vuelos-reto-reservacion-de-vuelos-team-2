import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/components/Navigation/Navigation';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
