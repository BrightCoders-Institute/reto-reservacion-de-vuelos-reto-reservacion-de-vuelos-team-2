import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: wp('10%'),
    paddingBottom: wp('1%'),
  },
  containerDropDown: {
    height: wp('8%'),
    paddingHorizontal: wp('5%'),
    marginTop: wp('17%'),
  },
  dropdown1BtnStyle: {
    flex: 1,
    width: wp('90%'),
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
