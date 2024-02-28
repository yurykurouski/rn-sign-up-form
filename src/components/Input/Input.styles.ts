import { GRAY_50, GRAY_300 } from 'assets';
import { StyleSheet } from 'react-native';

const VERTICAL_PADDING = 16;

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GRAY_300,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: GRAY_50,
  },
  input: {
    flexGrow: 1,
    fontSize: 18,
    fontFamily: 'Inter',
  },
});
