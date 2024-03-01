import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import { Controller, Control, FieldError } from 'react-hook-form';

import { CONFIRM_AGREEMENT, CLIENT_AGREEMENT } from 'constants/index';
import { Checkbox } from 'components/Checkbox';
import { styles } from './FormAgreement.styles';
import { EFormInputName, TFormInputs } from 'types';
import { ErrMessage } from 'components/ErrMessage';

type TProps = {
  control: Control<TFormInputs, any, TFormInputs>;
  formName: EFormInputName;
  error?: FieldError | string[];
};

export const FormAgreement = React.memo<TProps>(
  ({ formName, control, error }) => {
    const isErrorShown = Array.isArray(error) ? !!error.length : !!error;
    console.log('FormAgreement: ', error);
    const handleLinkPress = () => {
      Linking.openURL(
        'https://valetax.com/wp-content/uploads/terms_of_business_valetax_v4_31_aug.pdf',
      );
    };

    return (
      <>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => {
            const handlePress = () => {
              onChange(!value);
            };
            return (
              <Pressable style={styles.container} onPress={handlePress}>
                <Checkbox isSelected={value as boolean} />
                <Text style={styles.text}>
                  {CONFIRM_AGREEMENT}
                  <Text
                    style={[styles.text, styles.link]}
                    onPress={handleLinkPress}>
                    {CLIENT_AGREEMENT}
                  </Text>
                </Text>
              </Pressable>
            );
          }}
          name={formName}
        />
        {isErrorShown && (
          <ErrMessage error={[(error as FieldError)?.message!]} />
        )}
      </>
    );
  },
);
