import { api_userRegister } from 'api';
import { useCallback } from 'react';
import { StackNavigation, TCountry, TFormInputs } from 'types';
import { prepareData } from './SignUpForm.utils';
import { SubmitHandler } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { MAIN_STACK_ROUTE_NAMES } from 'navigation/routes';

export const useHandleFormSubmit = (userCountry?: TCountry | null) => {
  const { navigate } = useNavigation<StackNavigation>();

  return useCallback<SubmitHandler<TFormInputs>>(
    async data => {
      const preparedData = prepareData(data, userCountry);
      const res = await api_userRegister(preparedData);

      if (res?.status === 200) {
        navigate(MAIN_STACK_ROUTE_NAMES.DASHBOARD);
      }
    },
    [navigate, userCountry],
  );
};
