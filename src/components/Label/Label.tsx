import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Label = React.memo(({ value }: { value: string }) => (
  <Text style={styles.label}>{value}</Text>
));

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
});
