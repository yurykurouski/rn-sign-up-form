import React from 'react';

import { GRAY_300, GRAY_600, SearchIcon } from 'assets';
import { View, TextInput } from 'react-native';
import { styles } from './InputSearch.styles';

type TProps = {
  onSearch: (text: string) => void;
  placeholder: string;
};

export const InputSearch = ({ onSearch, placeholder }: TProps) => {
  return (
    <View>
      <SearchIcon color={GRAY_600} size={20} style={styles.icon} />
      <TextInput
        onChangeText={onSearch}
        style={styles.inputSearchStyle}
        placeholder={placeholder}
        placeholderTextColor={GRAY_300}
        maxLength={30}
      />
    </View>
  );
};
