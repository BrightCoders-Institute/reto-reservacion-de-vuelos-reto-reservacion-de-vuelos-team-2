import React from 'react';
import {View, Text} from 'react-native';
import {BookingCard} from '../../../../components/BookingCard';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../../components/Button/Button';
import {styles} from './ResultsStyles';

export const Results = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <BookingCard />
      </View>
      <BookingTitle title="Your request was received." width="70%" />

      <BottomButton>
        <Button
          title="Finish"
          onPress={() => {
            navigation.navigate('To');
          }}
        />
      </BottomButton>
    </View>
  );
};
