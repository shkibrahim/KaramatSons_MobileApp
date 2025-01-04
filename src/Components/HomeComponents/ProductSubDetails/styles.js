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
    title:{
        fontFamily:'PoppinsSB',fontSize:scale(23),color:theme.Tcolor,marginRight:scale(10)
    },
    row:{
        flexDirection:"row",alignItems:'center'
    },
    row2:{
        flexDirection:"row",alignItems:'flex-start'
    },
    box:{
        width:"100%",borderWidth:scale(0.6),borderColor:'#ddd',marginVertical:scale(10),paddingVertical:scale(10),borderRadius:scale(5),paddingHorizontal:scale(10),backgroundColor:'#f9f9f9'
    },
    des:{
        fontFamily:'PoppinsR',fontSize:scale(12),color:theme.Tcolor,marginLeft:scale(2)
    },
    sub:{
        fontFamily:'PoppinsM',fontSize:scale(15),color:theme.Tcolor,alignSelf:'center',
    },
    des2:{
        fontFamily:'PoppinsL',fontSize:scale(15),color:theme.Tcolor,alignSelf:'center',marginLeft:scale(10)
    },
    row3:{
          flexDirection:"row",alignItems:'center',alignSelf:"center",backgroundColor:"#ddd",paddingVertical:scale(5),paddingHorizontal:scale(10),width:'100%',justifyContent:'space-evenly',alignItems:"baseline"
    },
    subbox:{
        width:"65%",alignSelf:'center'
    },
    row4:{
        flexDirection:"row",alignItems:'center',justifyContent:'space-between',marginVertical:scale(5)
    
    },
    subboxer: {
        backgroundColor: 'rgba(255, 230, 238, 0.2)',width:devicewidth-60,alignSelf:"center",padding:scale(10),borderRadius:scale(10),elevation:0.5
      },
      txtcolor:{
        color:theme.Tcolor,fontFamily:'PoppinsM',fontSize:scale(15),
      }
      
    
  });
};

export default createStyles;
