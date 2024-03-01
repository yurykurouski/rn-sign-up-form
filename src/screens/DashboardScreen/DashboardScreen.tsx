import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { DASHBOARD_SCREEN_TITLE } from 'constants/index';

export const DashboardScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      automaticallyAdjustKeyboardInsets
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled">
      <Text>{DASHBOARD_SCREEN_TITLE}</Text>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  screenTitle: {
    fontSize: 28,
    fontFamily: 'Inter',
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 30,
  },
});
