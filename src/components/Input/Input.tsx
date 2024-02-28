import { GRAY_600, VisibilityIcon, VisibilityOffIcon } from 'assets';
import { Label } from 'components/Label';
import React, { useCallback, useState } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import { EInputType } from 'types';
import { styles } from './Input.styles';
import { TProps } from './Input.types';

export const Input = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  isNewPwd,
}: TProps) => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const typeProps: TextInputProps =
    type === EInputType.EMAIL
      ? {
          textContentType: 'emailAddress',
          autoComplete: type,
          inputMode: type,
          keyboardType: 'email-address',
        }
      : {
          textContentType: type,
          autoComplete: isNewPwd ? 'new-password' : 'current-password',
          passwordRules: isNewPwd ? 'rule' : undefined,
          keyboardType: 'default',
          secureTextEntry: isPwdVisible,
        };

  const handleIconPress = useCallback(() => {
    setIsPwdVisible(prev => !prev);
  }, [setIsPwdVisible]);

  return (
    <View style={styles.container}>
      <Label value={name} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChange}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={GRAY_600}
          {...typeProps}
        />
        {type === EInputType.PASSWORD && (
          <Pressable onPress={handleIconPress}>
            {isPwdVisible ? (
              <VisibilityIcon size={30} color={GRAY_600} />
            ) : (
              <VisibilityOffIcon size={30} color={GRAY_600} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};
