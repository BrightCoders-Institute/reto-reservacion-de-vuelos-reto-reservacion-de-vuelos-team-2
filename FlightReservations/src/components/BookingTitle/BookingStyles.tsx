import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: wp('5%'),
    wordWrap: 'break-word',
    width: wp('90%'),
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#000',
    padding: wp('5%'),
    lineHeight: 50,
  },
});
