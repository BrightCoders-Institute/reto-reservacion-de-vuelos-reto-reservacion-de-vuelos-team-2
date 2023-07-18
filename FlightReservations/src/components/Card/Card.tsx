import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styleCard';

interface props {
  estateOrigin?: string;
  estateDestination?: string;
  countryOrigin?: string;
  countryDestination?: string;
  date?: string;
  tickets?: string;
}

export const Card = ({
  estateOrigin,
  estateDestination,
  countryOrigin,
  countryDestination,
  date,
  tickets,
}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.primaryText}>{estateOrigin}</Text>
        <Icon name="airplane-landing" size={30} color="#5974F5" />
        <Text style={styles.primaryText}>{estateDestination}</Text>
      </View>
      <View style={styles.containerSubTitle}>
        <Text style={styles.SecondaryText}>{countryOrigin}</Text>
        <Text style={styles.SecondaryText}>{countryDestination}</Text>
      </View>
      <View style={styles.containerDate}>
        <Text style={styles.tertiaryText}>{date}</Text>
        <Text style={styles.tertiaryText}>{tickets}</Text>
      </View>
    </View>
  );
};
