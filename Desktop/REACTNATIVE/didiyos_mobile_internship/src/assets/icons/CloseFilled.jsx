import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseFilled = props => (
  <Svg
    width={39}
    height={39}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.8438 0C7.1076 0 0 7.1076 0 15.8438C0 24.5799 7.1076 31.6875 15.8438 31.6875C24.5799 31.6875 31.6875 24.5799 31.6875 15.8438C31.6875 7.1076 24.5799 0 15.8438 0ZM22.4425 20.7188L20.7188 22.4425L15.8438 17.5675L10.9688 22.4425L9.24498 20.7188L14.12 15.8438L9.24498 10.9688L10.9688 9.24498L15.8438 14.12L20.7188 9.24498L22.4425 10.9688L17.5675 15.8438L22.4425 20.7188Z"
      fill="#E84747"
    />
  </Svg>
);

export default CloseFilled;
