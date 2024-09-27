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
                height:scale(150),width:devicewidth,resizeMode:'contain'
              
              },
              btntxt:{
                fontFamily:'PoppinsM',fontSize:scale(15),color:'white'
              },
              btntxts:{
                fontFamily:'PoppinsR',fontSize:scale(13),color:theme.Tcolor
              },
              btnbag:{
              width:devicewidth-30,alignSelf:"center",backgroundColor:theme.Tcolor,paddingVertical:scale(10),borderRadius:scale(15),alignItems:"center",marginTop:scale(10),
              },
              btnshare:{
                width:devicewidth-30,alignSelf:"center",backgroundColor:'#fff',paddingVertical:scale(10),borderRadius:scale(15),alignItems:"center",marginTop:scale(10),flexDirection:'row',justifyContent:"center",borderWidth:scale(1),borderColor:theme.Tcolor,alignItems:'center',marginBottom:scale(20)
                },
                widthf:{
                  width:devicewidth-30,alignItems:"flex-start",alignSelf:"center"
                },
                alertdes:{
                  fontFamily:'PoppinsSB',fontSize:scale(12),color:theme.Tcolor,textAlign:'left'
                }
    
  });
};

export default createStyles;
