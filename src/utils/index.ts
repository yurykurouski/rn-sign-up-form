import { Platform } from 'react-native';
import { ERR_TYPES } from 'types';
import { FieldError } from 'react-hook-form';
import { Alert } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const filterErrs = (whitelist: ERR_TYPES[], fieldErr?: FieldError) => {
  if (fieldErr?.types) {
    return Object.keys(fieldErr?.types).filter(err =>
      whitelist.includes(err as ERR_TYPES),
    );
  }
};

export const showAlert = (message: unknown) => {
  Alert.alert('Oops...', message as string, [
    {
      text: 'Ok',
      style: 'cancel',
    },
  ]);
};
