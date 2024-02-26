import React from 'react';
import { Linking, Pressable } from 'react-native';
import { COMPANY_SITE } from '../../constants';
import { ACCENT_COLOR, DARK_COLOR, LogoIcon } from 'assets';

export const Logo = React.memo(() => {
  const handlePress = () => {
    Linking.openURL(COMPANY_SITE).catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    <Pressable onPress={handlePress}>
      <LogoIcon accentColor={ACCENT_COLOR} textColor={DARK_COLOR} />
    </Pressable>
  );
});
