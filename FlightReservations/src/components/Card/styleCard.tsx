import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    primaryText:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    SecondaryText:{
        fontSize: 12,
        color: '#898989',
        marginBottom: wp('2%'),
    },
    tertiaryText:{
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    containerTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: wp('2%'),
    },
    containerSubTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#898989',
        borderBottomWidth: 1,
        marginBottom: wp('2%'),
    },
    containerDate:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: wp('4%'),
    },
    container:{
        marginHorizontal: wp('5%'), 
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        marginBottom: wp('4%'),
    }
});