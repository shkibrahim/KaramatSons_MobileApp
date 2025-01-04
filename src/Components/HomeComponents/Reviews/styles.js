import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container:{
        width:devicewidth-30,alignSelf:"center",alignItems:'flex-start',marginTop:scale(10)
    },
      
    reviewbox:{
      width:devicewidth-30,alignSelf:"center",marginTop:scale(10)
    },
    head:{
      fontFamily:'PoppinsSB',fontSize:scale(23),color:theme.Tcolor,marginRight:scale(10)
    },
    ratingbox:{
      borderRadius:scale(7),backgroundColor:'#b6e6e6',padding:scale(10),marginBottom:scale(10)
    },
    flexstart:{
      alignItems:'flex-start',marginLeft:scale(10)
    },
    round:{
      height:scale(25),width:scale(25),backgroundColor:theme.primary,borderRadius:scale(50),alignItems:'center',justifyContent:'center',elevation:5
    },
    row:{
      alignItems:'center',flexDirection:'row'
    },
    name:{
      fontFamily:'PoppinsM',fontSize:scale(15),color:'#000'
    },
    star:{ flexDirection: 'row', justifyContent: 'space-between',
      marginTop:scale(10),
      width: 70 , alignItems:"center"
    },
    review:{
      fontFamily:'PoppinsL',fontSize:scale(13),color:'black',marginTop:scale(5)
    },
    showMoreButton:{
      alignSelf:"center"
    },
    showMoreText:{
      fontFamily:'PoppinsM',fontSize:scale(15),color:theme.primary
    }
  });
};

export default createStyles;
