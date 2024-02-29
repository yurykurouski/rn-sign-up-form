import { Platform } from 'react-native';
import { ERR_TYPES } from 'types';
import { FieldError } from 'react-hook-form';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const filterErrs = (whitelist: ERR_TYPES[], fieldErr?: FieldError) => {
  if (fieldErr?.types) {
    return Object.keys(fieldErr?.types).filter(err =>
      whitelist.includes(err as ERR_TYPES),
    );
  }
};
