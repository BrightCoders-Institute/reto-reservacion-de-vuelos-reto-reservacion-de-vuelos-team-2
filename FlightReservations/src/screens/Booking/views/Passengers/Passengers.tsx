import React from 'react';
import {View, Text} from 'react-native';
import {BookingCard} from '../../../../components/BookingCard';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Picker} from 'react-native-wheel-pick';
import {styles} from './PassengersStyles';

export const Passengers = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <BookingCard />
      <BookingTitle title="How many passengers?" width="80%" />
      <View style={styles.container}>
        <Picker
          style={{backgroundColor: 'transparent'}}
          selectedValue="1"
          pickerData={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          onValueChange={(value: string) => {
            console.log(value);
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
