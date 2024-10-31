import React from 'react';
import Svg, {Circle, Rect, Line} from 'react-native-svg';
const Plus = ({width, height, fill}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 78 78"
      fill="#FEBB3C"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="39" cy="39" r="39" fill={fill} />
      <Rect x="20" y="20" width="38" height="38" fill="none" />
      <Line x1="39" y1="26" x2="39" y2="52" stroke="white" strokeWidth="4" />
      <Line x1="26" y1="39" x2="52" y2="39" stroke="white" strokeWidth="4" />
    </Svg>
  );
};
export default Plus;
