import { ELEVATION_10, GRAY_300, GRAY_900 } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  dropdownContainer: {
    ...ELEVATION_10,
    borderRadius: 6,
  },
  dropdown: {
    paddingVertical: 12,
    borderColor: GRAY_300,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  dropdownFocused: {
    borderColor: GRAY_900,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  image: { width: 20, height: 14, marginRight: 10 },
});
