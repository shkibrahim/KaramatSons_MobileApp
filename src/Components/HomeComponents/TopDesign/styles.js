import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    image:{
        width:devicewidth,height:deviceheight+12
    },
    pagination:
    { flexDirection: 'row', justifyContent: 'center', position:"absolute",width:'100%',bottom:scale(50) },
  });
};

export default createStyles;
