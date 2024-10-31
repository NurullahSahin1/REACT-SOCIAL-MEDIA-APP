import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const Vector = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={39} // Kırmızı butonun genişliği ile aynı
    height={39} // Kırmızı butonun yüksekliği ile aynı
    {...props}>
    <Circle cx="12" cy="12" r="12" fill="green" />
    <Path
      d="M9 16.2l-4.2-4.2 1.4-1.4L9 13.4l6-6 1.4 1.4-7.4 7.4z"
      fill="white"
    />
  </Svg>
);

export default Vector;
