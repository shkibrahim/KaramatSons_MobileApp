import { View, Text, ScrollView, Image,ActivityIndicator } from "react-native";
import React, { useState,useEffect,useRef } from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import ProductList from "../../../DataLists/ProductDataList/ProductList";
import BlogDisplay from "../BlogDisplay/BlogDisplay";
import BlogList from "../../../DataLists/BlogList/BlogList";
export default function Blog() {
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
    <View style={styles.container}>
      <Text style={styles.head}>ALL THAT'S NEW</Text>
      
      
        <BlogDisplay
        // handleViewMore={handleViewMore}
        // visibleProducts={visibleProducts}
        ProductList={BlogList}
        // flatListRef ={flatListRef}
      />
      
     

     
    </View>
  );
}
