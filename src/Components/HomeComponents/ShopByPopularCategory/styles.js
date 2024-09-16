import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container: {
      marginVertical:scale(10),

    }, 
    head:{
        fontFamily:'PoppinsB',fontSize:scale(22),alignSelf:"center",color:'#000'
    },
    row:{
        width:devicewidth,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:scale(16)
    },
    center:{
        alignItems:"center",width:'48%',
    },
    spiderleft:{
        backgroundColor:'#e0e5e5',height:scale(160),width:'100%',borderTopRightRadius:scale(60),borderBottomLeftRadius:scale(60),overflow:'hidden'
    },
    spiderright:{
        backgroundColor:'#e0e5e5',height:scale(160),width:'100%',borderTopLeftRadius:scale(60),borderBottomRightRadius:scale(60),   overflow:'hidden'

    },
    spiderimage:{
        height:'100%',width:'100%',resizeMode:'contain'
    },
    spidertext:{
        fontFamily:'PoppinsSB',fontSize:scale(14),marginTop:scale(7)
    },
    badge:{
        backgroundColor:'#e20101'  ,paddingHorizontal:scale(16),borderRadius:scale(10),alignItems:'center',justifyContent:'center'
    },
    badgetext:{
        fontFamily:'PoppinsR',color:'white',fontSize:scale(12)
    }   ,
    highlight:{
        fontFamily:'PoppinsB',color:'#000'
    },
    btxt:{
        fontFamily:'PoppinsR',color:'#000',fontSize:scale(14)
    }

    
  });
};

export default createStyles;
