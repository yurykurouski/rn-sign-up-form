import React from 'react';
import { Text } from 'react-native';
import { ALREADY_HAVE, LOGIN } from 'constants/index';
import { styles } from './LoginLink.styles';

export const LoginLink = React.memo(({ onPress }: { onPress: () => void }) => {
  return (
    <Text style={styles.main}>
      {ALREADY_HAVE}
      <Text style={styles.link} onPress={onPress}>
        {LOGIN}
      </Text>
    </Text>
  );
});
