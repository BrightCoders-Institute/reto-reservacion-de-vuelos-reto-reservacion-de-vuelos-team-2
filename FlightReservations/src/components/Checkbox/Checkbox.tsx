import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: defaultChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const toggleCheckbox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };
  return (
    <View>
      <CheckBox title={label} checked={checked} onPress={toggleCheckbox} />
      <Text>{checked ? 'Checked' : 'Unchecked'}</Text>
    </View>
  );
};
