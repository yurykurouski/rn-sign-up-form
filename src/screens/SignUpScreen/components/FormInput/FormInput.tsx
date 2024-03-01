import React from 'react';
import { Input } from 'components/Input';
import { Controller } from 'react-hook-form';
import { TFormInputProps } from 'types';
import { styles } from './FormInput.styles';
import { ErrMessage } from 'components/ErrMessage';

export const FormInput = ({
  control,
  type,
  formName,
  inputName,
  inputPlaceholder,
  trigger,
  error,
  topMargin,
  optional = false,
}: TFormInputProps) => {
  const isErrorShown = Array.isArray(error) ? !!error.length : !!error;

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value as string}
            onChangeText={text => {
              onChange(text);
              trigger?.();
            }}
            onBlur={onBlur}
            containerStyle={topMargin ? styles.margin20 : {}}
            name={inputName}
            placeholder={inputPlaceholder}
            type={type}
            autoCapitalize="none"
            optional={optional}
          />
        )}
        name={formName}
      />
      {isErrorShown && <ErrMessage error={error} />}
    </>
  );
};
