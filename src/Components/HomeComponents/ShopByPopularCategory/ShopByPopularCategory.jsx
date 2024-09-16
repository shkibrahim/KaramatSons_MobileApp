import { View, Text, ScrollView,Dimensions } from 'react-native'
import React ,{useRef,useState}from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
import HorizontalSpider from './HorizontalSpider';
import PopularList from '../../../DataLists/PopularList';
export default function ShopByPopularCategory() {
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

  const scrollRef = useRef(null); // To control the scroll programmatically
  const { width } = Dimensions.get('window');
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;

    // If the user scrolls past the last item (i.e., the clone of the first), reset to the first item
    if (contentOffsetX >= contentWidth - width) {
      setTimeout(() => {
        // Adding a delay to ensure the scroll action completes before resetting
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ x: 0, animated: false }); // Scroll back to the actual first item
        }
      }, 50); // A small delay of 50ms for smoother transition
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.head}>SHOP BY POPULAR CATEGORY</Text>
      <ScrollView 
      ref={scrollRef}
      pagingEnabled
      onScrollEndDrag={handleScroll} // Detect the end of scrolling
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      horizontal>
     <HorizontalSpider List={PopularList[0]}/>
     <HorizontalSpider  List={PopularList[1]}/>


      </ScrollView>
    </View>
  )
}