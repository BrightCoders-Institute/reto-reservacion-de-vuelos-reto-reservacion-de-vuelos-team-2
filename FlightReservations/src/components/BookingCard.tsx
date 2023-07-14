import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const BookingCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del vuelo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: wp('1%'),
    borderColor: 'blue',
    height: wp('30%'),
    borderRadius: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
