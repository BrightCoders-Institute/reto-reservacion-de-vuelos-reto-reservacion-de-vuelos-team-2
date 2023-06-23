import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  btn__container: {
    backgroundColor: '#5C6EF8',
    padding: wp('3%'),
    marginHorizontal: wp('5%'),
    borderRadius: 10,
  },
  btn__text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
