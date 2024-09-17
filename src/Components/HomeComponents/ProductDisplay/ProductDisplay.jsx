import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import  createStyles  from './styles'
export default function ProductDisplay() {
    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme ,DarkLogo} =
    useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    DarkLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });
  return (
    <View>
      <Text>ProductDisplay</Text>
    </View>
  )
}