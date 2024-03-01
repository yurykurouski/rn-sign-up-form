import { RED } from 'assets';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FieldError } from 'react-hook-form';

import { ERR_MSG } from 'screens/SignUpScreen/components/SignUpForm/SignUpForm.constants';

export const ErrMessage = ({
  error,
}: {
  error?: FieldError | string[] | undefined;
}) => {
  return (
    <Text style={styles.errMsg}>
      {Array.isArray(error)
        ? ERR_MSG[error[0]]
        : ERR_MSG[error?.type as string]}
    </Text>
  );
};

const styles = StyleSheet.create({
  errMsg: {
    marginTop: 6,
    color: RED,
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});
