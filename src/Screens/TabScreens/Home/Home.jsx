import { View, Text, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../../Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from './styles';
import WelcomeBar from '../../../Components/HomeComponents/WelcomeBar/WelcomeBar';
import SearchBar from '../../../Components/HomeComponents/SearchBar/SearchBar';
import FilterList from '../../../Components/HomeComponents/FilterList/FilterList';
import DesignLayout from '../../../Components/HomeComponents/DesignLayout/DesignLayout';
import HomeList from '../../../DataLists/HomeList';
import SecondHeader from '../../../Components/HomeComponents/SecondHeader/SecondHeader';
import TopDesign from '../../../Components/HomeComponents/TopDesign/TopDesign';
import { LinearGradient } from 'expo-linear-gradient';
import ShopByPopularCategory from '../../../Components/HomeComponents/ShopByPopularCategory/ShopByPopularCategory';
import NewOnSale from '../../../Components/HomeComponents/NewOnSale/NewOnSale';
const Home = ({navigation}) => {
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
const [FilterBar,setFilterBar] = useState(false)
const [SearchQuery,setSearchQuery] = useState('')
const [FilterListing,setFilterListing] = useState('Allitems')
const [ListData,setListData] =useState(HomeList)
const [NavbarChecker, setNavbarChecker] = useState(false);
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
useEffect(()=>{
const myfunc = ()=>{
  if (FilterListing == 'Allitems'){
    setListData()
  }
}
},[FilterListing])
  return (
    <SafeAreaView style={styles.container}>
      {NavbarChecker == true && (
  <>
  <View style={styles.head}>

    <SecondHeader SearchQuery={SearchQuery} navigation={navigation}
      setSearchQuery={setSearchQuery} 
      setFilterBar={setFilterBar} 
      FilterBar={FilterBar} />
      <View style={styles.margin}>
<SearchBar
        SearchQuery={SearchQuery}
        setSearchQuery={setSearchQuery}
        setFilterBar={setFilterBar}
        FilterBar={FilterBar}
      />
</View>

{FilterBar && NavbarChecker == true && (
      <FilterList 
        FilterListing={FilterListing} 
        setFilterListing={setFilterListing} 
      />
    )}
</View>

   
  </>
)}
  <ScrollView 
        onScroll={handleScroll}
        scrollEventThrottle={16}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
   {NavbarChecker == false && (
  <>

<LinearGradient
  style={{ position: "absolute", zIndex: 1000, width: "100%",height:200 }}
  colors={["#000", "rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.3)", "transparent"]}
  start={{ x: 0, y: 0 }} // Gradient starts from top
  end={{ x: 0, y: 1 }}   // Gradient ends at bottom
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
<TopDesign/>



      

 {FilterBar && NavbarChecker == false && (
      <FilterList 
        FilterListing={FilterListing} 
        setFilterListing={setFilterListing} 
      />
    )}
    <ShopByPopularCategory/>
<NewOnSale/>
 {/* <DesignLayout ListData={ListData}/> */}
 </ScrollView>
    </SafeAreaView>
  )
}

export default Home