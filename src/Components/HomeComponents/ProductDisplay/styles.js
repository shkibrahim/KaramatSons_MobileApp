import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Title } from "react-native-paper";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({

    contain:{ flex: 1 ,marginVertical:scale(10),marginLeft:scale(10),overflow:"hidden"},
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
        width:scale(160),height:scale(310),backgroundColor:'#ced3d4',overflow:'hidden'
    },
    viewitembtn:{
        width:scale(160),height:scale(310),overflow:'hidden',marginRight:scale(10),alignItems:"center",justifyContent:"center"
    },
    gap:{
      marginRight:scale(10)
    },
    img:{
        height:scale(200),width:'100%',resizeMode:'contain'
    },
    Title:{
        fontFamily:'PoppinsSB',fontSize:scale(12),color:'#000',textAlign:"left",width:scale(120),alignSelf:"flex-start",marginLeft:scale(5)
    },
    price:{
        marginLeft:scale(5),fontFamily:'PoppinsL',fontSize:scale(15),color:'#000'
    },
    row:{
        alignItems:'center',flexDirection:"row"
    },
    absolutebtn:{
        position:"absolute",right:scale(5),top:scale(5)
    },
    imagecontainer:{
        backgroundColor:"#e0e5e5"
    },
    sale:{
          marginLeft:scale(5),fontFamily:'PoppinsL',fontSize:scale(12),color:'red',textDecorationLine:"line-through"
        
    },
    savetxt:{
        color:'red',fontFamily:'PoppinsB',fontSize:scale(15),marginLeft:scale(5),opacity:0.7
    },
    gobtn:{
        backgroundColor:theme.bar,flexDirection:"row",alignItems:"center",justifyContent:"center",paddingHorizontal:scale(10),paddingVertical:scale(5),borderRadius:scale(5)
    },
    gotxt:{
        color:'#fff',fontFamily:'PoppinsR',fontSize:scale(14),marginRight:scale(5)
    },
    rowabsolute:{
zIndex:100000,
        position:"absolute",flexDirection:"row",justifyContent:"space-between",width:'100%',paddingHorizontal:scale(5),top:scale(4),alignItems:"center"
    },
    saleicon:{
        backgroundColor:'red',height:scale(35),borderRadius:scale(45),width:scale(35),alignItems:"center",justifyContent:"center"
    },
    saleicontxt:{
        fontFamily:'PoppinsSB',color:'#fff',fontSize:scale(11)
    },
    fav:{
         backgroundColor:theme.bar,height:scale(35),borderRadius:scale(45),width:scale(35),alignItems:"center",justifyContent:"center",alignSelf:"flex-end"
    }
   

  });
};

export default createStyles;
