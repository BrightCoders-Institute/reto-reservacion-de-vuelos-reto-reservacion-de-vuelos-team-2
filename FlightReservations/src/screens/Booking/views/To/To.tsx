import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {BookingCard} from '../../../../components/BookingCard';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './ToStyles';

export const To = () => {
  const navigation = useNavigation();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={{flex: 1}}>
      <BookingCard />
      <BookingTitle title="Where will you be flying to?" width="80%" />
      <View style={styles.containerDropDown}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Select location'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
      <BottomButton>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate('Date');
          }}
        />
      </BottomButton>
    </View>
  );
};
