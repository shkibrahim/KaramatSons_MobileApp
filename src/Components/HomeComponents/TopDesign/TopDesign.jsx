import { View, Text,Image,ScrollView,TouchableOpacity ,Dimensions} from 'react-native'
import React,{useRef,useState} from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
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
  const screenWidth = Dimensions.get('window').width;

  const scrollToIndex = (index) => {
    setSelectedIndex(index);
    scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true });
  };
  return (
    <ScrollView 
    ref={scrollViewRef}
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onMomentumScrollEnd={(event) => {
      const newIndex = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
      setSelectedIndex(newIndex);
    }}
    horizontal>
      
      {TopDesignList.map((item, index) => (
          <View key={index} style={{ width: screenWidth, alignItems: 'center' }}>
            <Image source={item.Image } style={styles.image} />
         
          </View>
        ))}
    </ScrollView>
  )
}