import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LeftArrow = (props) => (
  <Svg
    width={12}
    height={20}
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8381 19.2756C10.2889 19.8248 9.39856 19.8248 8.84938 19.2756L0.411881 10.8381C-0.137293 10.2889 -0.137293 9.39856 0.411881 8.84938L8.84938 0.411884C9.39856 -0.137291 10.2889 -0.137291 10.8381 0.411884C11.3873 0.961058 11.3873 1.85145 10.8381 2.40062L3.39499 9.84375L10.8381 17.2869C11.3873 17.8361 11.3873 18.7264 10.8381 19.2756Z"
      fill="#677383"
    />
  </Svg>
);
export default LeftArrow;
