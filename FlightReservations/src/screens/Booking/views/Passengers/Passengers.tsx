import React from 'react';
import {View} from 'react-native';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Picker} from 'react-native-wheel-pick';
import {styles} from './PassengersStyles';
import {Card} from '../../../../components/Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/reducers';
import {setTickets} from '../../../../store/dataSlice';

export const Passengers = () => {
  const navigation = useNavigation();
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
      <BookingTitle title="How many passengers?" width="80%" />
      <View style={styles.container}>
        <Picker
          style={{backgroundColor: 'transparent'}}
          selectedValue="1"
          pickerData={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          onValueChange={(value: string) => {
            if (value === '1') {
              dispatch(setTickets(value));
              return;
            }
            dispatch(setTickets(value));
          }}
        />
      </View>
      <BottomButton>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate('Results');
          }}
        />
      </BottomButton>
    </View>
  );
};
