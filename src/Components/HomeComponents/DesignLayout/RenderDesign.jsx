import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
export default function RenderDesign({item}) {
    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } =
    useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  });
  return (
    <View>
      <Text>RenderDesign</Text>
    </View>
  )
}