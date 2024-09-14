import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

export default createStyles = ({ Tcolor, primary, secondary, background, theme }) => {
  return StyleSheet.create({
    rowContainer: {
     marginTop:scale(16)
    
    },
    leftItem:{
      marginLeft:scale(16),marginRight:scale(5)
    },
    rightItem:{
      marginRight:scale(16),
marginLeft:scale(5)
    },
    item: {
      width:'90%',
      flex: 1,
      marginTop:scale(16),
   
      borderRadius: 8,
      
      // justifyContent: 'center',
    },
  //   leftItem: {
  //  height:280 // Different background color for left items
  //   },
  //   rightItem: {
  //     backgroundColor: secondary, // Different background color for right items
  //   },
    image: {
      
    },
    title: {
      color: Tcolor,
      fontSize: 16,
      marginTop: 10,
    },
    price: {
      color: Tcolor,
      fontSize: 14,
      marginTop: 5,
    },
    // invisible: {
    //   backgroundColor: 'transparent',
    // },
    leftImage:{
      width: '100%',
      height: scale(150),
   borderBottomLeftRadius:scale(60),
   borderTopRightRadius:scale(60),
      resizeMode:'cover'
    },
    rightImage:{
      width: '100%',
      borderTopLeftRadius:scale(60),
      borderBottomRightRadius:scale(60),
      height: scale(150),
  
      resizeMode:'cover'
    }
  });
};
