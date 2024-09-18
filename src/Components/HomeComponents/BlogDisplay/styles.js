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
    { flexDirection: 'row', justifyContent: 'center', position:"absolute",
        width:'100%',bottom:scale(50) },
    date:{
            fontFamily:'PoppinsL',fontSize:scale(12),color:'gray',alignSelf:"flex-end",marginRight:scale(10),marginTop:scale(5)
        },
        title:{
            fontFamily:'PoppinsR',fontSize:scale(14),color:'#000',alignSelf:"center",paddingHorizontal:scale(10),marginTop:scale(10),textAlign:"justify"
        },
        des:{
            fontFamily:'PoppinsL',fontSize:scale(10),color:'gray',alignSelf:"center",paddingHorizontal:scale(10),marginTop:scale(10),textAlign:"center"

        },
        readmoretxt:{
            fontFamily:'PoppinsL',fontSize:scale(10),alignSelf:"center",color:'black'
        },
        readmore:{
            alignSelf:"center",alignItems:'center',justifyContent:"center",flexDirection:'row',marginTop:scale(10)
        }
  });
};

export default createStyles;
