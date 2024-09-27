import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      height:deviceheight
    }, 
    margin:{
      marginTop:scale(10)
    },
    head:{
      backgroundColor:'#000',width:devicewidth,paddingVertical:scale(10)
          },
          logo:{
            height:scale(35),width:'100%',resizeMode:'contain',margin:scale(10),alignSelf:"center"
                },
                center:{
                  alignItems:"center"
              },
              logotxt:{
          color:"white",fontFamily:'PoppinsR',
              },

              img:{
                height:deviceheight-10,width:devicewidth-30,resizeMode:'cover',alignSelf:"center"
              
              },
              absoluterow:{
                position:"absolute",flexDirection:"row",justifyContent:"space-between",width:devicewidth-30,alignItems:"center",paddingHorizontal:scale(10),alignSelf:"center",bottom:scale(0),top:scale(0)
              },
             
    
  });
};

export default createStyles;
