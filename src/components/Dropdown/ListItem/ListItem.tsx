import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './ListItem.styles';
import { API_GET_COUNTRY_LOGO, BASE_URL } from 'api';

type TProps = {
  id: number;
  name: string;
};

export const ListItem = React.memo<TProps>(({ id, name }) => {
  return (
    <View style={styles.container}>
      <Image
        src={`${BASE_URL}${API_GET_COUNTRY_LOGO}${id}`}
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
});
