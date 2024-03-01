import { TextInputProps } from 'react-native';
import { EInputType } from 'types';

export const getInputProps = (
  type: EInputType,
  isPwdVisible: boolean,
  isNewPwd?: boolean,
): TextInputProps => {
  switch (type) {
    case EInputType.EMAIL:
      return {
        textContentType: 'emailAddress',
        autoComplete: type,
        inputMode: type,
        keyboardType: 'email-address',
      };
    case EInputType.PASSWORD:
      return {
        textContentType: type,
        autoComplete: isNewPwd ? 'new-password' : 'current-password',
        passwordRules: isNewPwd ? 'rule' : undefined,
        keyboardType: 'default',
        secureTextEntry: !isPwdVisible,
        maxLength: 15,
      };
    default:
      return { autoComplete: 'off' };
  }
};
