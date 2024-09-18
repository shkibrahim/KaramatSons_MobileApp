import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const ProductScreen = ({navigation}) => {
    const {
        Tcolor,
        primary,
        secondary,
        background,
        theme,
        logo,
        toggleTheme,
        DarkLogo,
      } = useTheme();
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
    <SafeAreaView style={styles.container}>
      <Text>ProductScreen</Text>
    </SafeAreaView>
  )
}

export default ProductScreen