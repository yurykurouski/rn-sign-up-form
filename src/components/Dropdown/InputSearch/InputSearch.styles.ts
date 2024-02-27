import { ELEVATION_1 } from 'assets';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 20,
  },
  inputSearchStyle: {
    paddingLeft: 40,
    paddingRight: 10,
    height: 40,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 10,
    ...ELEVATION_1,
  },
});
