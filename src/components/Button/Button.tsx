import React from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from './Button.styles';

type TProps = {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
};

export const Button = React.memo<TProps>(
  ({ label, onPress, containerStyle, labelStyle }) => {
    return (
      <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </Pressable>
    );
  },
);
