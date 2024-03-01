import { TFormInputs, TCountry, TRegisterUserData } from 'types';

export const prepareData = (
  formData: TFormInputs,
  countryData?: TCountry | null,
): TRegisterUserData => {
  return {
    email: formData.email,
    password: formData.password,
    partnerCode: formData.partnerCode,
    countryId: countryData?.id,
  };
};
