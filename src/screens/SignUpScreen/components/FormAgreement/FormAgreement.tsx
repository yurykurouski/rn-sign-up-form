import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import { CONFIRM_AGREEMENT, CLIENT_AGREEMENT } from 'constants/index';
import { Checkbox } from 'components/Checkbox';
import { styles } from './FormAgreement.styles';

type TProps = {
  isSelected: boolean;
  onPress: () => void;
};

export const FormAgreement = React.memo<TProps>(({ isSelected, onPress }) => {
  const handleLinkPress = () => {
    Linking.openURL(
      'https://valetax.com/wp-content/uploads/terms_of_business_valetax_v4_31_aug.pdf',
    );
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Checkbox isSelected={isSelected} />
      <Text style={styles.text}>
        {CONFIRM_AGREEMENT}
        <Text style={[styles.text, styles.link]} onPress={handleLinkPress}>
          {CLIENT_AGREEMENT}
        </Text>
      </Text>
    </Pressable>
  );
});
