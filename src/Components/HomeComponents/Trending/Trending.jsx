import { View, Text, ScrollView, Image,ActivityIndicator } from "react-native";
import React, { useState,useEffect,useRef } from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import ProductList from "../../../DataLists/ProductDataList/ProductList";
export default function Trending() {
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
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10); // Initially showing 10 products
  const [FilteredData, setFilteredData] = useState([]);
  const [Filtervalue, setFiltervalue] = useState("Summer Shawls");
  const flatListRef = useRef(null);
  const filterData = () => {
    setLoading(true);
    const words = Filtervalue.toLowerCase().split(" "); // Split Filtervalue into individual words
    const filteredList = []; // List to store matched items
  
    ProductList.forEach((item) => {
      // Convert all item fields to lowercase and split into words
      const Title = item.Title.toLowerCase().split(" ");
      const Description = item.Description.toLowerCase().split(" ");
      const SubDescription = item.SubDescription.toLowerCase().split(" ");
      const Category = item.Category.toLowerCase().split(" ");
      const Season = item.Season.toLowerCase().split(" ");
      const Gender = item.Gender.toLowerCase().split(" ");
      const Stuff = item.Stuff.toLowerCase().split(" ");
  
      // Count the number of matches for each product
      let matchCount = 0;
  
      words.forEach((word) => {
        if (
          Title.includes(word) ||
          Description.includes(word) ||
          SubDescription.includes(word) ||
          Category.includes(word) ||
          Season.includes(word) ||
          Gender.includes(word) ||
          Stuff.includes(word)
        ) {
          matchCount++; // Increment the match count for each matching word
        }
      });
  
      if ( item.Trending === true) {
        // Push the item and its match count to the list
        filteredList.push({ item, matchCount });
      }
    });
  
    // Sort the filtered list by match count in descending order (best match first)
    const sortedFilteredList = filteredList
      .sort((a, b) => b.matchCount - a.matchCount)
      .map((entry) => entry.item); // Extract the item after sorting
  
    console.log("Sorted Filtered List", sortedFilteredList, sortedFilteredList.length);
    setFilteredData(sortedFilteredList); // Update the state with the sorted list
    setLoading(false);
  };
  
  
  
  
  const handleViewMore = () => {
    console.log("red");
    // setVisibleProducts((prev) => prev + 10); // Show 10 more products when "View More" is clicked
  };
  useEffect(() => {
    filterData();

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  }, [Filtervalue]);
  return (
    <View style={styles.container}>
      <Text style={styles.head}>TRENDING</Text>
      {
        loading ? <ActivityIndicator size="large" color="#000" /> :
        <ProductDisplay
        handleViewMore={handleViewMore}
        visibleProducts={visibleProducts}
        ProductList={FilteredData}
        flatListRef ={flatListRef}
      />
      }
     

     
    </View>
  );
}
