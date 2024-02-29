import { StyleSheet } from 'react-native';
import { GRAY_400, GRAY_900 } from 'assets';

export const styles = StyleSheet.create({
  main: {
    color: GRAY_400,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 20,
  },
  link: {
    color: GRAY_900,
    textDecorationLine: 'underline',
    fontWeight: '600',
    paddingLeft: 10,
  },
});
