import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const PlusOutline = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
        fill="#0F0F0F"
      />
    </Svg>
  );
};

export default PlusOutline;

const styles = StyleSheet.create({});
