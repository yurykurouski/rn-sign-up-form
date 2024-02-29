import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type TProps = {
  value: string;
  style?: TextStyle;
};

export const Label = React.memo<TProps>(({ value, style }) => (
  <Text style={[styles.label, style]}>{value}</Text>
));

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
