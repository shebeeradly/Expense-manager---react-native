import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Images } from '../constants';

const ShareScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ShareScreen</Text>
      <View style={styles.loading}>
      <LottieView source={Images.LOADINGWHITE} autoPlay />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
  }
});

export default ShareScreen;