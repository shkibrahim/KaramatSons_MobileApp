import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    btn:{
        flexDirection:"row",
        alignItems:"center",paddingHorizontal:scale(15),
        paddingVertical:scale(8),justifyContent:"center",
        borderRadius:scale(12),marginRight:scale(5),borderWidth:scale(0.7),borderColor:'lightgray'
    },
    btntxt:{
        fontFamily:'PoppinsR',fontSize:scale(14),marginLeft:scale(3)
    },
    margin:{
        margin:scale(16)
    }
  
  });
};

export default createStyles;
