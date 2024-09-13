import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../../Theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from './styles';
import WelcomeBar from '../../../Components/HomeComponents/WelcomeBar/WelcomeBar';
import SearchBar from '../../../Components/HomeComponents/SearchBar/SearchBar';
import FilterList from '../../../Components/HomeComponents/FilterList/FilterList';
import DesignLayout from '../../../Components/HomeComponents/DesignLayout/DesignLayout';
const Home = ({navigation}) => {
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
const [FilterBar,setFilterBar] = useState(false)
const [SearchQuery,setSearchQuery] = useState('')
const [FilterListing,setFilterListing] = useState('Allitems')
const [ListData,setListData] =useState([])
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
      <WelcomeBar/>
      <SearchBar SearchQuery={SearchQuery} setSearchQuery={setSearchQuery} setFilterBar={setFilterBar} FilterBar={FilterBar}/>
      {FilterBar && 
      <FilterList FilterListing={FilterListing} setFilterListing={setFilterListing}/>
    }

 <DesignLayout ListData={ListData}/>
    </SafeAreaView>
  )
}

export default Home