import { View, Text, ScrollView, Image,Animated,Easing  } from "react-native";
import React, { useEffect, useState ,useRef} from "react";
import { useTheme } from "../../../../Theme";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./styles";
import WelcomeBar from "../../../Components/HomeComponents/WelcomeBar/WelcomeBar";
import SearchBar from "../../../Components/HomeComponents/SearchBar/SearchBar";
import FilterList from "../../../Components/HomeComponents/FilterList/FilterList";
import DesignLayout from "../../../Components/HomeComponents/DesignLayout/DesignLayout";
import HomeList from "../../../DataLists/HomeList";
import SecondHeader from "../../../Components/HomeComponents/SecondHeader/SecondHeader";
import TopDesign from "../../../Components/HomeComponents/TopDesign/TopDesign";
import { LinearGradient } from "expo-linear-gradient";
import ShopByPopularCategory from "../../../Components/HomeComponents/ShopByPopularCategory/ShopByPopularCategory";
import NewOnSale from "../../../Components/HomeComponents/NewOnSale/NewOnSale";
import NewArrivals from "../../../Components/HomeComponents/NewArrivals/NewArrivals";
import Trending from "../../../Components/HomeComponents/Trending/Trending";
import Blog from "../../../Components/HomeComponents/Blog/Blog";
const Home = ({ navigation }) => {
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
  const [FilterBar, setFilterBar] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const [FilterListing, setFilterListing] = useState("Allitems");
  const [ListData, setListData] = useState(HomeList);
  const [NavbarChecker, setNavbarChecker] = useState(false);
  const slideAnim = useRef(new Animated.Value(-100)).current; // Initial position off-screen

  const handleScroll = (event) => {
    // Get the current scroll position
    const scrollY = event.nativeEvent.contentOffset.y;

    // Check if the user has scrolled down a bit (e.g., 10 pixels)
    if (scrollY > 16) {
      setNavbarChecker(true);
    } else {
      setNavbarChecker(false);
    }
  };
  // console.log(FilterListing)
  // useEffect(() => {
  //   const myfunc = () => {
  //     if (FilterListing == "Allitems") {
  //       setListData();
  //     }
  //   };
  // }, [FilterListing]);
  useEffect(() => {
    if (NavbarChecker) {
      Animated.timing(slideAnim, {
        toValue: 0, // Slide down into view
        duration: 500, // Animation duration
        easing: Easing.out(Easing.ease), // Smooth easing
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -100, // Move it back up
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [NavbarChecker])
  return (
    <SafeAreaView style={styles.container}>
      {NavbarChecker === true && (
      <Animated.View style={[styles.head, { transform: [{ translateY: slideAnim }] }]}>
        <SecondHeader
          SearchQuery={SearchQuery}
          navigation={navigation}
          setSearchQuery={setSearchQuery}
          setFilterBar={setFilterBar}
          FilterBar={FilterBar}
        />
        <View style={styles.margin}>
          <SearchBar
            SearchQuery={SearchQuery}
            setSearchQuery={setSearchQuery}
            setFilterBar={setFilterBar}
            FilterBar={FilterBar}
          />
        </View>

        {FilterBar && NavbarChecker === true && (
          <FilterList
            FilterListing={FilterListing}
            setFilterListing={setFilterListing}
          />
        )}
      </Animated.View>
    )}
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {NavbarChecker == false && (
          <>
            <LinearGradient
              style={{
                position: "absolute",
                zIndex: 1000,
                width: "100%",
                height: 200,
              }}
              colors={[
                "#000",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.3)",
                "transparent",
              ]}
              start={{ x: 0, y: 0 }} // Gradient starts from top
              end={{ x: 0, y: 1 }} // Gradient ends at bottom
            >
              <View style={styles.center}>
                <Image source={DarkLogo} style={styles.logo} />
                <Text style={styles.logotxt}>Karamat Sons</Text>
              </View>

              {/* <SearchBar /> */}
            </LinearGradient>

            {/* <View style={{position:"absolute",zIndex:1000,backgroundColor: 'rgba(64, 64, 64, 0.75)' ,width:'100%'}}>

    <WelcomeBar />
    <SearchBar 
      SearchQuery={SearchQuery} 
      setSearchQuery={setSearchQuery} 
      setFilterBar={setFilterBar} 
      FilterBar={FilterBar} 
    />
  </View> */}
          </>
        )}
        <TopDesign />

        {FilterBar && NavbarChecker == false && (
          <FilterList
            FilterListing={FilterListing}
            setFilterListing={setFilterListing}
          />
        )}
        <ShopByPopularCategory />
        <NewOnSale navigation={navigation}/>
        <NewArrivals  navigation={navigation}/>
        <Trending  navigation={navigation}/>
        <Blog  navigation={navigation}/>
      <View style={{ height: 400 }}></View>

        {/* <DesignLayout ListData={ListData}/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
