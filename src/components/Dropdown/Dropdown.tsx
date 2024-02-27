import { ELEVATION_10, GRAY_300, GRAY_900 } from 'assets';
import { Label } from 'components/Label';
import {
  SIGN_UP_REGION_LABEL,
  SIGN_UP_REGION_PLACEHOLDER,
  SIGN_UP_REGION_SEARCH_PLACEHOLDER,
} from 'constants/index';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown as DropdownComponent } from 'react-native-element-dropdown';
import { InputSearch } from './InputSearch';

type TProps = {
  //TODO: add types
  data: any[];
  value: string;
  setValue: (value: string) => void;
};

export const Dropdown = ({ data = [], value, setValue }: TProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderInputSearch = (onSearch: (text: string) => void) => (
    <InputSearch
      onSearch={onSearch}
      placeholder={SIGN_UP_REGION_SEARCH_PLACEHOLDER}
    />
  );

  return (
    <View style={styles.container}>
      <Label value={SIGN_UP_REGION_LABEL} />
      <DropdownComponent
        style={[styles.dropdown, isFocus && styles.dropdownFocused]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.dropdownContainer}
        iconStyle={styles.iconStyle}
        data={data}
        search
        renderInputSearch={renderInputSearch}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={SIGN_UP_REGION_PLACEHOLDER}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdownContainer: {
    ...ELEVATION_10,
    borderRadius: 6,
  },
  dropdown: {
    height: 50,
    borderColor: GRAY_300,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  dropdownFocused: {
    borderColor: GRAY_900,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
