import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
  },
  titleText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#5974F5',
  },
});
