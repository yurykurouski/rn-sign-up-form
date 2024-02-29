import React from 'react';
import { View } from 'react-native';
import { CheckIcon, GRAY_900 } from 'assets';
import { styles } from './Checkbox.styles';

export const Checkbox = React.memo(
  ({ isSelected }: { isSelected: boolean }) => {
    return (
      <View style={styles.outer}>
        {isSelected && <CheckIcon size={16} color={GRAY_900} />}
      </View>
    );
  },
);
