import { api_userRegister } from 'api';
import { useCallback } from 'react';
import { TCountry, TFormInputs } from 'types';
import { prepareData } from './SignUpForm.utils';
import { SubmitHandler } from 'react-hook-form';

export const useHandleFormSubmit = (userCountry?: TCountry | null) => {
  return useCallback<SubmitHandler<TFormInputs>>(
    async data => {
      const preparedData = prepareData(data, userCountry);
      const res = await api_userRegister(preparedData);

      if (res?.status === 200) {
        console.log('success');
      }
    },
    [userCountry],
  );
};
