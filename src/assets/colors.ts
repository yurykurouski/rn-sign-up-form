import { Platform, ViewStyle } from 'react-native';

export const ACCENT_COLOR = '#111928';
export const DARK_COLOR = '#1b9a6d';

export const GRAY_50 = '#f9fafb';
export const GRAY_300 = '#d1d5db';
export const GRAY_400 = '#a2a6ad';
export const GRAY_600 = '#4b5563';
export const GRAY_900 = '#141921';
export const RED = '#E02424';

export const ELEVATION_1: ViewStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  android: {
    elevation: 1,
    overflow: 'hidden',
  },
})!;

export const ELEVATION_10 = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  android: {
    elevation: 10,
  },
});
