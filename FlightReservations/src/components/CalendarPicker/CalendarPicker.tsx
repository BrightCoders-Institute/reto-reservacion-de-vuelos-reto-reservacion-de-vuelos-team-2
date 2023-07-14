import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar, DateObject} from 'react-native-calendars';
import moment from 'moment';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface CalendarPickerProps {
  onDateSelect: (selectedDate: Date) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

  const handleDateSelect = (day: DateObject) => {
    const formattedDate = moment(day.dateString).toDate();
    setSelectedDate(day.dateString);
    onDateSelect(formattedDate);
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        current={selectedDate}
        onDayPress={handleDateSelect}
      />
    </View>
  );
};

export default CalendarPicker;

const styles = StyleSheet.create({
  container: {
    borderRadius: wp('3%'),
    justifyContent: 'center',
    paddingHorizontal: wp('7%'),
  },
  calendar: {
    backgroundColor: 'transparent',
  },
});
