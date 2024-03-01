import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CountryDataContextProvider } from 'context/CountryDataContext/index';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from 'navigation/stacks/MainStack/index';

export default () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <CountryDataContextProvider>
        <MainStack />
      </CountryDataContextProvider>
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
