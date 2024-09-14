import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    //   height:deviceheight
    },
    bar:{
        margin:scale(16),
        flexDirection:"row",
        backgroundColor:'transparent',
        alignItems:"center",justifyContent:"space-between"
    },
    start:{
        alignItems:'flex-start'
    },
    alignhello:{
        flexDirection:"row",alignItems:"center"
    },
    welcometxt:{
        fontFamily:'PoppinsR',color:"gray",opacity:scale(0.5),fontSize:scale(14)
    },
    Name:{
        fontFamily:'PoppinsSB',fontSize:scale(18),color:theme.Tcolor
    },
    hand:{
        marginHorizontal:scale(3),marginBottom:scale(6)
    },
    imageborder:{
        height:scale(45),width:scale(43),borderRadius:scale(40),overflow:"hidden",backgroundColor:"gray"
    },
    img:{
        height:'100%',width:'100%',resizeMode:'cover'
    }
    
  });
};

export default createStyles;
