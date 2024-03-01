import React from 'react';
import { Text } from 'react-native';
import { ALREADY_HAVE, LOGIN } from 'constants/index';
import { styles } from './LoginLink.styles';
import { useNavigation } from '@react-navigation/native';
import { MAIN_STACK_ROUTE_NAMES } from 'navigation/routes';
import { StackNavigation } from 'types';

export const LoginLink = React.memo(() => {
  const { navigate } = useNavigation<StackNavigation>();

  const handlePress = () => {
    navigate(MAIN_STACK_ROUTE_NAMES.SIGN_IN);
  };

  return (
    <Text style={styles.main}>
      {ALREADY_HAVE}
      <Text style={styles.link} onPress={handlePress}>
        {LOGIN}
      </Text>
    </Text>
  );
});
