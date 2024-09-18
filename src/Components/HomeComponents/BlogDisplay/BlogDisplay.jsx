import { View, Text,Dimensions,Image,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';
import { scale } from 'react-native-size-matters';
export default function BlogDisplay(
    {
        ProductList
    }
) {
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width;
  const screenheight = Dimensions.get('window').height;
  const carouselRef = useRef(null);
    const onSnapToItem = (index) => {
      setCurrentIndex(index);
      // Programmatically scroll the carousel to the selected index
      carouselRef.current?.scrollTo({ index });
    };
  return (
    <View>
        <Carousel
        loop
        ref={carouselRef}

        width={screenWidth}
        autoPlay
        scrollAnimationDuration={1500}
        enabled={false}
        autoPlayInterval={3500}
        height={440}
        scrollViewProps={{
          scrollEnabled: false,
        }}
        scrollEnabled={false}
        onSnapToItem={onSnapToItem}
        pagingEnabled={true}
        data={ProductList}
        renderItem={({ item }) => (
            <View>
          <Image
            source={{uri:item.Image}} // Use 'item.Image' instead of destructuring
            style={{ width: '100%', height:scale(280),resizeMode:"cover"}}
          />
          <Text style={styles.date}>
{item.LaunchDate}
          </Text>

          <Text style={styles.title}>
            {item.Title}
            </Text>
            <Text style={styles.des}>
  {item.Description.length > 130 
    ? `${item.Description.substring(0, 110)}...` 
    : item.Description}
</Text>

<TouchableOpacity style={styles.readmore}>
    <MaterialIcons name="double-arrow" size={20} color="black" />
<Text style={styles.readmoretxt}>
    READ MORE
</Text>

    </TouchableOpacity>


</View>

        )}
      
      />
           {/* <View style={styles.pagination}>
        {ProductList.map((_, index) => (
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
      </View> */}
    
    </View>
    )
}