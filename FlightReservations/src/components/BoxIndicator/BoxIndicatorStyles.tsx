import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  indicatorBox: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 120,
    backgroundColor: 'rgb(33,37,43)',
  },
  indicatorText: {
    fontSize: 14,
    color: 'rgb(92,110,248)',
  },
  btn: {
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
  modal: {
    backgroundColor: 'blue',
  },
});
