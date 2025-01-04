import { Dimensions, StyleSheet } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const devicewidth = Dimensions.get("window").width;
const deviceheight = Dimensions.get("window").height;

const createStyles = (theme) => {
  return StyleSheet.create({
    container:{
     flex:1,marginHorizontal:scale(10),
    },
      
    reviewbox:{
      width:devicewidth-30,alignSelf:"center",marginTop:scale(10)
    },
    backtxt:{
        fontFamily:'PoppinsM',fontSize:scale(18),color:'#000',marginLeft:scale(25)
    },
    removebtn:{
position:'absolute',top:0,right:0,backgroundColor:'red',borderRadius:scale(20),padding:scale(3),zIndex:1
    },
    section:{
marginTop:scale(20)
    },
    imageBox: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      },
    box:{
     alignSelf:"center",width:"100%",height:scale(250),
backgroundColor:"#bec9cb",borderRadius:scale(10),marginVertical:scale(10),alignItems:"center",justifyContent:'center'
    },

      contentContainer: {
        alignItems: "center",
      },
      image: {
        width: '100%',
       
        height:100,
        resizeMode: "cover",
      },
      addBox: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
    headtxt:{
        fontFamily:'PoppinsM',fontSize:scale(18),color:theme.Tcolor,marginBottom:scale(10)
    },
    headtxt2:{
        fontFamily:'PoppinsM',fontSize:scale(18),color:theme.Tcolor
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        // marginTop: 10,
      },
      tag2: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent:'space-between',
        paddingVertical: scale(9),
        marginRight: scale(10),
        marginBottom: scale(5),
      },
      tag: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: scale(10),
        marginBottom: scale(5),
      },
      tagText: {
        fontSize: scale(13),fontFamily:"PoppinsR",
        marginRight: 5,
      },
      removeText: {
        color: "#ff5252",
        fontSize: 16,
        fontWeight: "bold",
      },
      remover:{
        position:"absolute",right:-5,top:0,borderRadius:scale(10),backgroundColor:"#a4a4a4",height:scale(14),width:scale(14),alignItems:"center",justifyContent:"center"
      },
    input:{
borderWidth:scale(0.6),borderColor:'#ddd',padding:scale(10),borderRadius:scale(10),marginBottom:scale(10),fontSize:scale(14)
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
    },
    dropdownHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: "#ddd",
      },
      dropdownText: {
        fontSize: scale(14),fontFamily:"PoppinsR",
        color: "#333",
      },
      dropdown: {
        overflow: "hidden",
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        marginTop: scale(5),
      },
      container2:{
marginBottom:scale(10)
      },
      dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      dropdownItemText: {
        fontSize: scale(14),fontFamily:"PoppinsR",
        color: "#333",
      },
      ins:{
elevation:scale(4),padding:scale(10),borderRadius:scale(10),marginBottom:scale(10),alignItems:"center",justifyContent:"space-between",width:'100%'
,shadowColor: "#000",shadowOpacity: 0.25,shadowRadius: 3.84,shadowOffset: {width: 0,height: 1}
,backgroundColor:"#f0f0f0",flexDirection:"row",alignSelf:"center",marginHorizontal:scale(10)
      },
  });
};

export default createStyles;
