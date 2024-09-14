import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

export default createStyles = ({ Tcolor, primary, secondary, background, theme }) => {
  return StyleSheet.create({

    head:{
backgroundColor:'#000',height:scale(150),width:devicewidth
    },
    logo:{
height:scale(35),width:'100%',resizeMode:'contain',margin:scale(10),alignSelf:"center"
    },
    row:{
        alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:scale(16)
    },
    center:{
        alignItems:"center"
    },
    logotxt:{
color:"white",fontFamily:'PoppinsR',
    },
    circle:{
        backgroundColor:'#fc7070',borderRadius:scale(26),alignItems:"center",justifyContent:'center',
        height:scale(19),width:scale(19),position:'absolute',zIndex:3,right:scale(-12),top:scale(-10)
    },
    cartnum:{
        fontFamily:'PoppinsR',fontSize:scale(12),color:'white'
    },
    margin:{
        marginTop:scale(10)
    }
  });
};
