import { View, Text,Image,ScrollView,TouchableOpacity ,Dimensions} from 'react-native'
import React,{useRef,useState,useEffect} from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
import Carousel from 'react-native-reanimated-carousel';

import TopDesignList from '../../../DataLists/TopDesignList';
export default function TopDesign() {
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
  const scrollViewRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;
const intervalRef = useRef(null);
const carouselRef = useRef(null);
  const scrollToIndex = (index) => {
    setSelectedIndex(index);
    scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
  };
  
  const onSnapToItem = (index) => {
    setCurrentIndex(index);
    // Programmatically scroll the carousel to the selected index
    carouselRef.current?.scrollTo({ index });
  };
  // const scrollToNext = () => {
  //   let nextIndex = selectedIndex + 1;
  //   if (nextIndex >= TopDesignList.length) {
  //     nextIndex = 0; // Loop back to the first item
  //   }
    
  //   // Add a timeout to slow down the scrolling effect
  //   setTimeout(() => {
  //     scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
  //   }, 500); // Slow down the scrolling by adding a delay of 500ms

  //   setSelectedIndex(nextIndex);
  // };

  // useEffect(() => {
  //   // Set up autoplay interval (scroll every 5 seconds)
  //   intervalRef.current = setInterval(scrollToNext, 5000); // Increase autoplay interval to 5 seconds

  //   // Clear the interval when the component is unmounted
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [selectedIndex]);
  return (

    <View>
        <Carousel
        loop
        ref={carouselRef}

        width={screenWidth}
        autoPlay
        scrollAnimationDuration={2500}
        enabled={false}
        autoPlayInterval={3000}
        height={screenheight+12}
        scrollViewProps={{
          scrollEnabled: false,
        }}
        scrollEnabled={false}
        onSnapToItem={onSnapToItem}
        pagingEnabled={true}
        data={TopDesignList}
        renderItem={({ item }) => (
          <Image
            source={item.Image} // Use 'item.Image' instead of destructuring
            style={{ width: '100%', height: '100%' }}
          />
        )}
      
      />
           <View style={styles.pagination}>
        {TopDesignList.map((_, index) => (
          <TouchableOpacity
          onPress={() => onSnapToItem(index)}
            key={index}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: currentIndex === index ? 'orange' : '#ccc', // Highlight the active dot
            }}
          />
        ))}
      </View>
    
    </View>
    // <ScrollView 
    // ref={scrollViewRef}
    // pagingEnabled
    // showsHorizontalScrollIndicator={false}
    // onMomentumScrollEnd={(event) => {
    //   const newIndex = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    //   setSelectedIndex(newIndex);
    // }}
    // horizontal>
      
    //   {TopDesignList.map((item, index) => (
    //       <View key={index} style={{ width: screenWidth, alignItems: 'center' }}>
    //         <Image source={item.Image } style={styles.image} />
         
    //       </View>
    //     ))}
    // </ScrollView>
  )
}