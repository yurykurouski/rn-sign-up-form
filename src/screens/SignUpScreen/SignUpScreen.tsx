import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SignUpForm } from './components/SignUpForm';
import { SIGNUP_SCREEN_TITLE } from 'constants/index';
import { Logo } from 'components/Logo';

export const SignUpScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      automaticallyAdjustKeyboardInsets
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled">
      <Logo />
      <Text style={styles.screenTitle}>{SIGNUP_SCREEN_TITLE}</Text>
      <SignUpForm />
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
