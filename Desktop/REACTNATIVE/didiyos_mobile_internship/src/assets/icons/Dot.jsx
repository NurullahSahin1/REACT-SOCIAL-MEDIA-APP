import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDot = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "24"}
    height={props.height || "24"}
    fill={props.fill || "#FEBB3C"}
    viewBox="0 0 10 10"
    {...props}
  >
    <Path d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0" />
  </Svg>
);

export default SvgDot;
