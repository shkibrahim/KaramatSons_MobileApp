import {
    View,
    Animated,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React, { useRef, useState, useEffect } from 'react';
  import { useTheme } from '../../../../Theme';
  import createStyles from './styles';
  import { Ionicons } from '@expo/vector-icons'; // Import icons for the arrows
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Entypo from '@expo/vector-icons/Entypo';
  const { width } = Dimensions.get('window'); // Get device width for snapToInterval
  
  export default function ProductImages({ navigation, item }) {
    const flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current; // Animated value to track scroll position
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  
    const {
      Tcolor,
      primary,
      secondary,
      background,
      theme,
      logo,blacks,
      toggleTheme,
      DarkLogo,
    } = useTheme();
  
    const styles = createStyles({
      Tcolor,
      primary,
      secondary,
      blacks,
      DarkLogo,
      background,
      theme,
      logo,
      toggleTheme,
    });
  
    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % item.Images.length; // Loop back to first image
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    };
  
    const handlePrev = () => {
      const prevIndex =
        (currentIndex - 1 + item.Images.length) % item.Images.length; // Loop back to last image
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
    };
  
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index); // Update the index when the item is scrolled
        if (viewableItems[0].index === item.Images.length - 1) {
          // When the last item is visible, scroll back to the first
          setTimeout(() => {
            flatListRef.current.scrollToIndex({ index: 0, animated: false });
          }, 300); // Small delay to allow the animation to finish
        }
      }
    }).current;
  
    const viewConfigRef = { itemVisiblePercentThreshold: 50 };
  
    const renderItem = ({ item, index }) => {
      const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
      ];
  
      // Create scaling effect using interpolation
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
        extrapolate: 'clamp',
      });
  
      return (
        <Animated.View style={{ transform: [{ scale }], width: width }}>
          <Image source={{ uri: item.Image }} style={styles.img} />
        </Animated.View>
      );
    };
  
    return (
      <View>
        <Animated.FlatList
          horizontal
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          data={item.Images}
          renderItem={renderItem}
          snapToInterval={width} // Snap to each item based on the screen width
          decelerationRate="fast" // Fast deceleration for quick snapping
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
  
        {/* Left arrow button */}
        <View style={styles.absoluterow}>
        <TouchableOpacity style={styles.leftArrow} onPress={handlePrev}>
        <Entypo name="chevron-thin-left" size={42} color={blacks} />
        </TouchableOpacity>
  
        {/* Right arrow button */}
        <TouchableOpacity style={styles.rightArrow} onPress={handleNext}>
        <Entypo name="chevron-thin-right" size={42} color={blacks} />

        </TouchableOpacity>
        </View>
      
      </View>
    );
  }
  