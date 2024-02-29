import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type TProps = {
  color: string;
  size: number;
  style?: ViewStyle;
};

export const CheckIcon = React.memo<TProps>(({ size, color, style }) => {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
      <Path
        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
        fill={color}
      />
    </Svg>
  );
});
