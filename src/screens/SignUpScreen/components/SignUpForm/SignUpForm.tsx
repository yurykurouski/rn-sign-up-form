import React, { useCallback } from 'react';
import { EFormInputName, EInputType, ERR_TYPES, TFormInputs } from 'types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  SIGNUP_SCREEN_TITLE,
  SIGN_UP_EMAIL_LABEL,
  SIGN_UP_PARTNER_CODE_LABEL,
  SIGN_UP_PARTNER_CODE_PLACEHOLDER,
  SIGN_UP_REPEAT_PASSWORD_LABEL,
  SIGN_UP_REPEAT_PASSWORD_PLACEHOLDER,
} from 'constants/index';
import { SIGN_UP_EMAIL_PLACEHOLDER } from 'constants/index';
import { SIGN_UP_PASSWORD_LABEL } from 'constants/index';
import { SIGN_UP_PASSWORD_PLACEHOLDER } from 'constants/index';
import { StyleSheet } from 'react-native';
import { PwdHints } from '../PwdHints';
import { FormInput } from '../FormInput';
import { SCHEMA } from './SignUpForm.constants';
import { filterErrs } from 'utils/index';
import { Dropdown } from 'components/Dropdown';
import { Button } from 'components/Button';
import { FormAgreement } from '../FormAgreement';
import { LoginLink } from '../LoginLink';

export const SignUpForm = React.memo(() => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<TFormInputs>({
    mode: 'onChange',
    delayError: 100,
    resolver: yupResolver(SCHEMA),
    criteriaMode: 'all',
  });

  const onSubmit = data => console.log(data);

  const handleTrigger = useCallback(
    (inputName: EFormInputName) => () => trigger(inputName),
    [trigger],
  );

  return (
    <>
      <Dropdown
        value="test"
        setValue={() => console.log('test')}
        data={['test', 'test']}
      />

      <FormInput
        control={control}
        type={EInputType.EMAIL}
        formName={EFormInputName.EMAIL}
        inputName={SIGN_UP_EMAIL_LABEL}
        inputPlaceholder={SIGN_UP_EMAIL_PLACEHOLDER}
        error={errors[EFormInputName.EMAIL]}
        topMargin
      />
      <FormInput
        control={control}
        type={EInputType.PASSWORD}
        formName={EFormInputName.PASSWORD}
        inputName={SIGN_UP_PASSWORD_LABEL}
        inputPlaceholder={SIGN_UP_PASSWORD_PLACEHOLDER}
        trigger={handleTrigger(EFormInputName.REPEAT_PWD)}
        error={filterErrs(
          [ERR_TYPES.MATCHES, ERR_TYPES.REQUIRED],
          errors[EFormInputName.PASSWORD],
        )}
        topMargin
      />

      <PwdHints
        control={control}
        errors={filterErrs(
          [
            ERR_TYPES.MIN,
            ERR_TYPES.MIN_NUMBER,
            ERR_TYPES.MIN_UPPERCASE,
            ERR_TYPES.MIN_LOWERCASE,
            ERR_TYPES.MIN_SYMBOL,
          ],
          errors[EFormInputName.PASSWORD],
        )}
      />

      <FormInput
        control={control}
        type={EInputType.PASSWORD}
        formName={EFormInputName.REPEAT_PWD}
        inputName={SIGN_UP_REPEAT_PASSWORD_LABEL}
        inputPlaceholder={SIGN_UP_REPEAT_PASSWORD_PLACEHOLDER}
        error={errors[EFormInputName.REPEAT_PWD]}
        topMargin
      />

      <FormInput
        control={control}
        type={EInputType.PASSWORD}
        formName={EFormInputName.PARTNER_CODE}
        inputName={SIGN_UP_PARTNER_CODE_LABEL}
        inputPlaceholder={SIGN_UP_PARTNER_CODE_PLACEHOLDER}
        error={errors[EFormInputName.PARTNER_CODE]}
        topMargin
        optional
      />

      <FormAgreement isSelected={false} onPress={() => console.log('adasd')} />

      <Button
        label={SIGNUP_SCREEN_TITLE}
        onPress={handleSubmit(onSubmit)}
        containerStyle={styles.submitBtn}
      />

      <LoginLink onPress={() => console.log('adasd')} />
    </>
  );
});

const styles = StyleSheet.create({
  submitBtn: { marginTop: 20 },
});
