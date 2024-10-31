import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;
//  X eksenine ait ölçüler için horizontalScale Kullanın 
//  Y eksenine ait ölçüler için verticalScale Kullanın 
const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
// added percentage width to customize buttons' width
const percentageWidth = percentage => (width * percentage) / 100;
export {horizontalScale, verticalScale, moderateScale, percentageWidth};