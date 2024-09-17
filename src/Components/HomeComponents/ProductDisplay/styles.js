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
      btn:{
        flexDirection:"row",
        alignItems:"center",paddingHorizontal:scale(23),
        paddingVertical:scale(8),justifyContent:"center",
        borderRadius:scale(12),marginRight:scale(5),borderWidth:scale(0.7),borderColor:'lightgray'
    },
    btntxt:{
        fontFamily:'PoppinsR',fontSize:scale(14),marginLeft:scale(3)
    },  margin:{
        marginHorizontal:scale(10)
    },
    viewitem:{
        width:(devicewidth/2)-12,alignItems:"center",height:200,backgroundColor:'#ced3d4',marginRight:scale(10),marginLeft:scale(10)
    }

  });
};

export default createStyles;
