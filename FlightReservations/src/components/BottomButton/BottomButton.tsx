import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const BottomButton = ({children}) => {
  return <View style={styles.buttonPosition}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonPosition: {
    position: 'absolute',
    bottom: wp('13%'),
    left: wp('2%'),
    width: wp('95%'),
  },
});
