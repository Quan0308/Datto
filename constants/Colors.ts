/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary: {
    50: '#fcf0f4',
    100: '#f6d0de',
    200: '#f2bace',
    300: '#ec9ab7',
    400: '#e886a9',
    500: '#e26894',
    600: '#ce5f87',
    700: '#a04a69',
    800: '#7c3951',
    900: '#5f2c3e',
    default: '#e26894',
  },
  secondary: {
    50: '#e7f4ff',
    100: '#b3deff',
    200: '#8eceff',
    300: '#5bb8ff',
    400: '#3baaff',
    500: '#0a95ff',
    600: '#0988e8',
    700: '#076ab5',
    800: '#06528c',
    900: '#043f6b',
  },
  error: {
    50: '#fceceb',
    100: '#f5c1bf',
    200: '#f0a3a0',
    300: '#e97974',
    400: '#e55f59',
    500: '#de3730',
    600: '#ca322c',
    700: '#9e2722',
    800: '#7a1e1a',
    900: '#5d1714',
    default: '#de3730',
  },
  neutral: {
    50: '#efefef',
    100: '#ccc',
    200: '#b4b4b4',
    300: '#929292',
    400: '#7d7d7d',
    500: '#5c5c5c',
    600: '#545454',
    700: '#414141',
    800: '#333',
    900: '#272727',
  },
  // supportingText: '#929292',
  // darkColor: '#a04a69',
  // surface: '#fcf0f4',
  // onSurface: '#272727',
  // divider: '#ccc',
  // default: '#0a95ff',
  // surfaceVariant: '#f6d0de80',
};
