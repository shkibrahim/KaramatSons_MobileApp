import { View, Text ,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles';
import RenderDesign from './RenderDesign';
export default function DesignLayout({ListData}) {
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
    <View style={{flex:1}}>
       <FlatList
      data={ListData}
      renderItem={({ item }) => <RenderDesign item={item} />}
      />
    </View>
  )
}