import { View, Text,ScrollView,Image,Animated,Easing, FlatList, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React,{useState,useRef,useEffect} from 'react'
import {Button} from 'react-native-paper'
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../../Theme'
import SearchBar from '../../../Components/HomeComponents/SearchBar/SearchBar'
import SecondHeader from '../../../Components/HomeComponents/SecondHeader/SecondHeader'
import createStyles from './styles'
import FilterList from '../../../Components/HomeComponents/FilterList/FilterList'
import ProductImages from '../../../Components/HomeComponents/ProductImages/ProductImages'
import ProductDetails from '../../../Components/HomeComponents/ProductDetails/ProductDetails'
export default function ProductScreen({navigation,route}) {
  const {item} = route.params;
console.log(item)
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
const [Quantity, setQuantity] = useState(1);
      const [FilterBar, setFilterBar] = useState(false);
      const [SearchQuery, setSearchQuery] = useState("");
      const [FilterListing, setFilterListing] = useState("Allitems");
      const [ListData, setListData] = useState(HomeList);
      const [NavbarChecker, setNavbarChecker] = useState(false);
const flatListRef = useRef(null);
      // Animation state
      const slideAnim = useRef(new Animated.Value(-100)).current; // Initial position off-screen

      const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;

        if (scrollY > 16) {
          setNavbarChecker(true);
        } else {
          setNavbarChecker(false);
        }
      };

      // Trigger the animation when NavbarChecker changes
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

    
      {NavbarChecker === false && (
        <>
          <LinearGradient
            style={{
            //   position: "absolute",
              zIndex: 1000,
              width: "100%",
            //   height: 200,
            }}
            colors={["#000", "rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.3)", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.center}>
              <Image source={DarkLogo} style={styles.logo} />
              <Text style={styles.logotxt}>Karamat Sons</Text>
            </View>
          </LinearGradient>
        </>
      )}

      {FilterBar && NavbarChecker === false && (
        <FilterList
          FilterListing={FilterListing}
          setFilterListing={setFilterListing}
        />
      )}

<ProductImages item={item} navigation={navigation}/>
<ProductDetails item={item} setQuantity={setQuantity}  Quantity={Quantity}/>
<TouchableOpacity activeOpacity={0.6} style={styles.btnbag} >
<Text style={styles.btntxt}>Add TO BAG</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnshare} >
            <Entypo name="share" size={20} color="black" />
<Text style={styles.btntxts}>SHARE</Text>
            </TouchableOpacity>
            <View style={styles.widthf}>
<Text style={styles.alertdes}>Note: Color of the article may varry from the uploaded picture</Text>

            </View>
    </ScrollView>
  </SafeAreaView>
  )
}