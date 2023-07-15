import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {styles} from './FromStyles';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {setCountryOrigin, setEstateOrigin} from '../../../../store/dataSlice';
import {RootState} from '../../../../store/reducers';
import {Card} from '../../../../components/Card/Card';
import {placesData} from '../../../../db/placesData';

export const From = () => {
  const navigation = useNavigation();
  const labelsArray = placesData.map(place => place.label);

  const dispatch = useDispatch();
  const {
    estateOrigin,
    estateDestination,
    countryOrigin,
    countryDestination,
    date,
    tickets,
  } = useSelector((state: RootState) => state.data);

  return (
    <View style={{flex: 1}}>
      <Card
        estateOrigin={estateOrigin}
        estateDestination={estateDestination}
        countryOrigin={countryOrigin}
        countryDestination={countryDestination}
        date={date}
        tickets={tickets}
      />
      <BookingTitle title="Where are you now?" width="80%" />

      <View style={styles.containerDropDown}>
        <SelectDropdown
          data={labelsArray}
          onSelect={(selectedItem, index) => {
            const place = placesData.find(item => item.label === selectedItem);
            const {
              value: {short, country},
            } = place;

            dispatch(setEstateOrigin(short));
            dispatch(setCountryOrigin(country));
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
            navigation.navigate('To');
          }}
        />
      </BottomButton>
    </View>
  );
};
