import React from 'react';
import {View} from 'react-native';
import CalendarPicker from '../../../../components/CalendarPicker/CalendarPicker';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {Card} from '../../../../components/Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/reducers';
import {setDate} from '../../../../store/dataSlice';
import moment from 'moment';

export const Date = () => {
  const navigation = useNavigation();

  const handleDateSelect = (selectedDate: Date) => {
    dispatch(setDate(moment(selectedDate).format('MMMM D, YYYY').toString()));
  };

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
      <BookingTitle title="Select date" />
      <CalendarPicker onDateSelect={handleDateSelect} />
      <BottomButton>
        <Button
          title="Next"
          onPress={() => {
            navigation.navigate('Passengers');
          }}
        />
      </BottomButton>
    </View>
  );
};
