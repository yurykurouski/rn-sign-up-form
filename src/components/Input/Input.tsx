import {
  ExpandIcon,
  GRAY_600,
  GRAY_900,
  VisibilityIcon,
  VisibilityOffIcon,
} from 'assets';
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
  optional = false,
}: TProps) => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(!optional);

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
          maxLength: 15,
        };

  const handleIconPress = useCallback(() => {
    setIsPwdVisible(prev => !prev);
  }, [setIsPwdVisible]);
  const handleExpandPress = useCallback(() => {
    optional && setIsInputVisible(prev => !prev);
  }, [optional]);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleExpandPress} style={styles.labelContainer}>
        <Label value={name} />
        {optional && (
          <ExpandIcon
            size={20}
            color={GRAY_900}
            style={isInputVisible ? styles.expandIcon : {}}
          />
        )}
      </Pressable>
      {isInputVisible && (
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
            <Pressable onPress={handleIconPress} hitSlop={10}>
              {isPwdVisible ? (
                <VisibilityIcon size={24} color={GRAY_600} />
              ) : (
                <VisibilityOffIcon size={24} color={GRAY_600} />
              )}
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};
