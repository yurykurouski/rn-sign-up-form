import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { CountryDataContextProvider } from 'context/CountryDataContext/index';

function App(): React.JSX.Element {
  return (
    <View style={styles.wrapper}>
      <SignUpScreen />
    </View>
  );
}

export default () => (
  <SafeAreaView style={styles.container}>
    <CountryDataContextProvider>
      <App />
    </CountryDataContextProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  wrapper: {
    padding: 10,
  },
});
