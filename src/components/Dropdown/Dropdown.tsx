import React, { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Label } from 'components/Label';
import {
  SIGN_UP_REGION_LABEL,
  SIGN_UP_REGION_PLACEHOLDER,
  SIGN_UP_REGION_SEARCH_PLACEHOLDER,
} from 'constants/index';

import { Dropdown as DropdownComponent } from 'react-native-element-dropdown';
import { InputSearch } from './InputSearch';
import { styles } from './Dropdown.styles';
import { BASE_URL, API_GET_COUNTRY_LOGO } from 'api';
import { ListItem } from './ListItem';
import { TCountry } from 'types';

type TProps = {
  data?: TCountry[] | null;
  value?: TCountry | null;
  setValue?: (value: TCountry) => void;
};

const regexp = /[A-Za-z]/;

const handleOnPaste = (content: string, cb: (text: string) => void) => {
  const preparedText = content
    .trim()
    .match(/[A-Za-z]/g)
    ?.join('');

  cb(preparedText || '');
};

const handleOnChangeText = async (
  content: string,
  cb: (text: string) => void,
) => {
  const copiedContent = await Clipboard.getString();

  const isPasted = content.includes(copiedContent);

  if (isPasted) {
    handleOnPaste(content, cb);
  } else {
    cb(content);
  }
};

const handlePasteText = async (text: string) => {
  const copiedContent = await Clipboard.getString();

  return text.includes(copiedContent);
};

export const Dropdown = ({ data = [], value, setValue }: TProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderInputSearch = useCallback((onSearch: (text: string) => void) => {
    const handleSearch = async (text: string) => {
      const isPasted = await handlePasteText(text);

      if (isPasted) {
      } else {
        if (!regexp.test(text) && text) {
          return;
        }

        if (text.length > 1 || !text) {
          handleOnChangeText(text, onSearch);
        }
      }
    };

    return (
      <InputSearch
        onSearch={handleSearch}
        placeholder={SIGN_UP_REGION_SEARCH_PLACEHOLDER}
      />
    );
  }, []);

  const renderItem = useCallback(
    (item: TCountry) => <ListItem id={item.id} name={item.name} />,
    [],
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
        data={data!}
        search
        renderInputSearch={renderInputSearch}
        maxHeight={300}
        labelField="name"
        valueField="id"
        placeholder={SIGN_UP_REGION_PLACEHOLDER}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoScroll={false}
        onChange={item => {
          setValue?.(item);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Image
            src={`${BASE_URL}${API_GET_COUNTRY_LOGO}${value?.id}`}
            style={styles.image}
          />
        )}
        renderItem={renderItem}
      />
    </View>
  );
};
