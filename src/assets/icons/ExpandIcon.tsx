import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type TProps = {
  color: string;
  size: number;
  style?: ViewStyle;
};

export const ExpandIcon = React.memo<TProps>(({ color, size, style }) => {
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" style={style}>
      <Path
        d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
        fill={color}
      />
    </Svg>
  );
});
