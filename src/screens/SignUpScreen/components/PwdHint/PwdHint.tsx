import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './PwdHint.styles';
import { TPwdHintProps } from 'types';

export const PwdHint = React.memo<TPwdHintProps>(
  ({ hint: { type, message }, errors, isDirty }) => {
    const isError = type.some(err => errors?.includes(err));

    const validationStyle = isError
      ? styles.messageInvalid
      : styles.messageValid;

    const style = !isDirty ? styles.message : validationStyle;

    return (
      <View style={styles.hintContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={style}>{message}</Text>
      </View>
    );
  },
);
