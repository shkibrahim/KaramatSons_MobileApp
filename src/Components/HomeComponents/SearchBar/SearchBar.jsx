import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import createStyles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SearchBar({
  setFilterBar,
  FilterBar,
  SearchQuery,setSearchQuery
}) {
    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme,circle,IconsColor } =
    useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,IconsColor,
    background,
    theme,
    logo,
    circle,
    toggleTheme,
  });
  return (
    <View style={styles.row}>
    <View style={styles.inputview}>
        <View style={styles.searchicon}>

    <AntDesign name="search1" size={22} color="#ddd" />
    </View>

    <TextInput 
    value={SearchQuery}
    onChangeText={setSearchQuery}
    placeholder='Search Clothes' placeholderTextColor={'#ddd'} style={styles.input}
    />

    </View>
    <TouchableOpacity  onPress={()=>setFilterBar(!FilterBar)} activeOpacity={0.6} style={styles.filterbtn}>
    <Ionicons name="color-filter" size={24} color={IconsColor} />
    </TouchableOpacity>
    </View>
  )
}