import React from 'react';
import { View } from 'react-native';
import { PwdHint } from '../PwdHint';
import { useController } from 'react-hook-form';
import { HINTS } from './PwdHints.constants';
import { Control } from 'react-hook-form';
import { TFormInputs } from 'types';
import { styles } from './PwdHints.styles';

type TProps = {
  errors: string[] | undefined;
  control: Control<TFormInputs, any, TFormInputs>;
};

export const PwdHints = ({ errors, control }: TProps) => {
  const {
    fieldState: { isDirty },
  } = useController({ name: 'password', control });

  return (
    <View style={styles.container}>
      {HINTS.map((hint, index) => (
        <PwdHint hint={hint} key={index} errors={errors} isDirty={isDirty} />
      ))}
    </View>
  );
};
