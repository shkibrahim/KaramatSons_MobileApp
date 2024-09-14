import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import SearchBar from "../SearchBar/SearchBar";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function SecondHeader(
  props,
  { SearchQuery, setSearchQuery, setFilterBar, FilterBar }
) {
  const {
    DarkLogo,
    LightLogo,
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  } = useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    DarkLogo,
    LightLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });

  const [cartnum, setcartnum] = useState(0);
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <SimpleLineIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.center}>
          <Image source={DarkLogo} style={styles.logo} />
          <Text style={styles.logotxt}>Karamat Sons</Text>
        </View>
        <TouchableOpacity style={styles.cart}>
          <View style={styles.circle}>
            <Text style={styles.cartnum}>{cartnum}</Text>
          </View>
          <AntDesign name="shoppingcart" size={29} color="white" />
        </TouchableOpacity>
      </View>


    
    </View>
  );
}
