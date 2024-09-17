import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
import SaleFilter from './SaleFilter';
export default function NewOnSale() {
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
    <View style={styles.container}>
      <Text style={styles.head}>NEW ON SALE</Text>
      <SaleFilter/>
      <View style={{height:400}}>

      </View>
    </View>
  )
}