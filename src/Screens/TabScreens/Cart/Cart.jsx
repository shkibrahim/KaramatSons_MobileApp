import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
const Cart = () => {
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
    <SafeAreaView style={styles.container}>
    <Text>Cart</Text>
  </SafeAreaView>
  )
}

export default Cart