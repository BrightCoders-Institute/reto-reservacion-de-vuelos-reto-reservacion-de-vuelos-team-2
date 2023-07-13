import React from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from '../../../../components/CalendarPicker/CalendarPicker';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {BookingCard} from '../../../../components/BookingCard';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';

export const Date = () => {
  const navigation = useNavigation();

  const handleDateSelect = (selectedDate: Date) => {
    console.log('Selected date:', selectedDate);
  };
  return (
    <View style={{flex: 1}}>
      <BookingCard />
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
