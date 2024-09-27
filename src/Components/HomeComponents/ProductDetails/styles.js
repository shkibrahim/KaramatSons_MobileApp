import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container: {
     width:devicewidth-30,alignSelf:"center",marginTop:scale(10)
    }, 
    title:{
        fontFamily:'PoppinsSB',fontSize:scale(23),color:theme.Tcolor
        
    },
    codetitle:{
        fontFamily:'PoppinsM',fontSize:scale(15),color:theme.Tcolor,
    
    },
    code:{
        fontFamily:'PoppinsL',fontSize:scale(15),color:theme.Tcolor,
    
    },
    stock:{
        fontFamily:'PoppinsL',fontSize:scale(13),color:theme.Tcolor,marginTop:scale(5)
    
    
    },
    stockred:{
        fontFamily:'PoppinsL',fontSize:scale(13),color:'red',marginTop:scale(5)
    
    
    },
    price:{
        fontFamily:'PoppinsL',fontSize:scale(22),color:theme.Tcolor,
    },
    row:{
        flexDirection:"row",alignItems:'center'
    },
    originalprice:{
        fontFamily:'PoppinsL',fontSize:scale(22),color:theme.Tcolor,marginLeft:scale(10),textDecorationLine:"line-through",

    },
    savepkr:{
        fontFamily:'PoppinsB',fontSize:scale(22),color:'red'
    },
    Quantitytxt:{
        fontFamily:'PoppinsM',fontSize:scale(14),color:theme.Tcolor,marginTop:scale(20)
    },
    boxrow:{
         flexDirection:"row",alignItems:'center',borderWidth:scale(0.6),borderColor:theme.Tcolor,marginVertical:scale(10),paddingHorizontal:scale(10),borderRadius:scale(5),width:scale(150),justifyContent:"space-between"
    }
    
  });
};

export default createStyles;
