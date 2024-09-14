import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({

    row:{
        alignItems:"center",flexDirection:"row",marginHorizontal:scale(16),justifyContent:'space-between'
    },
    inputview:{
        flexDirection:"row",alignItems:'center',borderWidth:scale(0.7),borderRadius:scale(9),height:scale(45),width:"81%",borderColor:'#ddd',overflow:"hidden"
    },
    filterbtn:{
        height:scale(45),backgroundColor:theme.circle,width:'16%',borderRadius:scale(9),alignItems:"center",justifyContent:'center'

    },
    input:{
        fontFamily:'PoppinsR',width:'100%',fontSize:scale(15),height:'100%',color:theme.Tcolor,overflow:"hidden",marginRight:scale(3)
    },
    absolute:{
        position:'absolute',left:scale(4)
    },
    searchicon:{
        marginHorizontal:scale(5),marginBottom:scale(4)
    }
  });
};

export default createStyles;
