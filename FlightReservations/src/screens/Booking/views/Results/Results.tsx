import React from 'react';
import {View} from 'react-native';
import {BookingTitle} from '../../../../components/BookingTitle/BookingTitle';
import {BottomButton} from '../../../../components/BottomButton/BottomButton';
import {Button} from '../../../../components/Button/Button';
import {styles} from './ResultsStyles';
import {Card} from '../../../../components/Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/reducers';
import {registerFlight} from '../../../../auth/RegisterNewFlight';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {
  setCountryDestination,
  setCountryOrigin,
  setDate,
  setEstateDestination,
  setEstateOrigin,
  setTickets,
} from '../../../../store/dataSlice';

type NavigationParams = {
  MyFlight: undefined;
  Booking: undefined;
};

type ResultsScreenRouteProp = RouteProp<NavigationParams, 'Booking'>;

type ResultsScreenNavigationProp = NavigationProp<NavigationParams, 'Booking'>;

type ResultsProps = {
  route: ResultsScreenRouteProp;
  navigation: ResultsScreenNavigationProp;
};

export const Results: React.FC<ResultsProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    estateOrigin,
    estateDestination,
    countryOrigin,
    countryDestination,
    date,
    tickets,
  } = useSelector((state: RootState) => state.data);

  const clearFlight = () => {
    dispatch(setEstateOrigin(''));
    dispatch(setEstateDestination(''));
    dispatch(setCountryOrigin(''));
    dispatch(setCountryDestination(''));
    dispatch(setDate(''));
    dispatch(setTickets(''));
  };

  const handleFinishButtonPress = () => {
    const newFlight = {
      estateOrigin,
      estateDestination,
      countryOrigin,
      countryDestination,
      date,
      tickets,
    };
    registerFlight(newFlight);
    setTimeout(() => {
      navigation.navigate('MyFlight' as keyof NavigationParams);
    }, 2000);
    clearFlight();
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Card
          estateOrigin={estateOrigin}
          estateDestination={estateDestination}
          countryOrigin={countryOrigin}
          countryDestination={countryDestination}
          date={date}
          tickets={tickets}
        />
      </View>
      <BookingTitle title="Your request was received." width="70%" />

      <BottomButton>
        <Button title="Finish" onPress={handleFinishButtonPress} />
      </BottomButton>
    </View>
  );
};
