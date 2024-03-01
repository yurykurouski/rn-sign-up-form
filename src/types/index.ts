import { NavigationProp } from '@react-navigation/native';
import { MAIN_STACK_ROUTE_NAMES } from 'navigation/routes';
import { Control, FieldError } from 'react-hook-form';
import { TextInputProps, ViewStyle } from 'react-native';

export enum EInputType {
  PASSWORD = 'password',
  EMAIL = 'email',
  TEXT = 'text',
}

export enum EFormInputName {
  EMAIL = 'email',
  PASSWORD = 'password',
  REPEAT_PWD = 'repeatPassword',
  PARTNER_CODE = 'partnerCode',
  AGREEMENT = 'agreement',
}

export type TFormInputs = {
  [EFormInputName.EMAIL]: string;
  [EFormInputName.PASSWORD]: string;
  [EFormInputName.REPEAT_PWD]: string;
  [EFormInputName.PARTNER_CODE]?: string;
  [EFormInputName.AGREEMENT]: boolean;
};

export type TFormInputProps = {
  control: Control<TFormInputs, any, TFormInputs>;
  type: EInputType;
  formName: EFormInputName;
  inputName: string;
  inputPlaceholder: string;
  trigger?: () => Promise<boolean>;
  error?: FieldError | string[];
  topMargin?: boolean;
  optional?: boolean;
};

export type TPwdHintProps = {
  hint: {
    type: string[];
    message: string;
  };
  isDirty: boolean;
  errors?: string[];
};

export type TInputProps = TextInputProps & {
  value?: string;
  onChangeText: (text: string) => void;
  name: string;
  type?: EInputType;
  placeholder?: string;
  isNewPwd?: boolean;
  optional?: boolean;
  containerStyle?: ViewStyle;
};

export enum ERR_TYPES {
  MATCHES = 'matches',
  REQUIRED = 'required',
  MIN = 'min',
  MIN_NUMBER = 'minNumber',
  MIN_UPPERCASE = 'minUppercase',
  MIN_LOWERCASE = 'minLowercase',
  MIN_SYMBOL = 'minSymbol',
}

export type TCountry = {
  alfa2: string;
  alfa3: string;
  id: number;
  name: string;
  phoneCode: string;
};

export type TRegisterUserData = {
  email: string;
  password: string;
  partnerCode?: string;
  countryId?: number;
};

export type RootStackParamList = Record<MAIN_STACK_ROUTE_NAMES, undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
