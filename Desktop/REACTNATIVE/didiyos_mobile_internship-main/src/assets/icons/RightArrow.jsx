import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgRightArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#677383"
      fillRule="evenodd"
      d="M7.83 4.455c.439-.44 1.151-.44 1.59 0l6.75 6.75c.44.439.44 1.151 0 1.59l-6.75 6.75a1.125 1.125 0 0 1-1.59-1.59L13.784 12 7.83 6.046a1.125 1.125 0 0 1 0-1.591"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRightArrow;