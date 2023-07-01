import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {styles} from './BoxIndicatorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BoxIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUpPress = () => {
    setIsLoading(true);

    // Simulate an asynchronous task (e.g., API request)
    // Replace this with your actual sign up logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Reset success state and close the modal after a certain delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 2000);
  };
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={handleSignUpPress}>
        <Text style={styles.btn__text}>Sign Up</Text>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        visible={isLoading || isSuccess}
        transparent={true}
        animationType="fade">
        <View style={styles.container}>
          <View style={styles.indicatorBox}>
            {isLoading && !isSuccess && (
              <>
                <ActivityIndicator size="large" color="rgb(92,110,248)" />
                <Text style={styles.indicatorText}>Signing up...</Text>
              </>
            )}
            {isSuccess && (
              <>
                <Icon name="check-circle" size={60} color="rgb(92,110,248)" />
                <Text style={styles.indicatorText}>Signed Up</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
