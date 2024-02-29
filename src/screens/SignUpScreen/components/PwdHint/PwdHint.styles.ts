import { GRAY_600 } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  message: {
    color: GRAY_600,
  },
  bullet: {
    fontWeight: 'bold',
  },
  messageValid: {
    color: 'green',
  },
  messageInvalid: {
    color: 'red',
  },
});
