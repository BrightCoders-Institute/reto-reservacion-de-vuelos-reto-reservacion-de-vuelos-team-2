import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './SubTitleStyles';

interface props {
  children: React.JSX.Element;
  isRequired?: boolean;
}
export const SubTitle = ({children, isRequired = true}: props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {children}
      {isRequired && <Text style={styles.supScript}>*</Text>}
    </View>
  );
};
