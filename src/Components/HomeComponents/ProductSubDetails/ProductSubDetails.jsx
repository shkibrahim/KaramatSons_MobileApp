import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters';
export default function ProductSubDetails({item}) {
    const {
        Tcolor,
        primary,
        secondary,
        background,
        theme,
        logo,
        toggleTheme,
    } = useTheme();
    const styles = createStyles({
        Tcolor,
        primary,
        secondary,
        background,
        theme,
        logo,
        toggleTheme,
    });
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <Text style={styles.title}>PRODUCT DETAILS</Text>
        <MaterialIcons name="horizontal-rule" size={45} color="black" />
        </View>
        <View style={styles.box}>
            <View style={styles.row2}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.des}>{item.Details1}</Text>
        </View>
        <View style={styles.row2}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.des}>{item.Details2}</Text>
        </View>

        <Text style={styles.sub}>More Information</Text>

        <View style={styles.inner}>
        <View style={styles.row3}>
            <Text style={styles.sub}>Gender</Text>

       

            <Text style={styles.des2}>
                {item.Gender}
            </Text>
    
            
            </View>
<View style={styles.subbox}>
            <Text style={{...styles.sub,marginTop:scale(10)}}>
                Colors
            </Text>
            <View style={styles.subboxer}> 
  {item.Color.map((colorObj, index) => {
    return (
      <View key={index} style={styles.row4}> 
        {/* Displaying the Color value inside Text */}
        <Text style={styles.txtcolor}>{colorObj.Color}</Text>  
        
        {/* Displaying the color block with backgroundColor set to the Code */}
        <View style={{ backgroundColor: colorObj.Code, width: 50, height: 50 }}>
        </View>
      </View>
    );
  })}
</View>


         
            </View>
            <View style={{...styles.row3,marginTop:scale(10)}}>
<Text style={styles.sub}>
    Product Type
</Text>
<Text style={styles.des2}>
    {item.ProductType}
    </Text>

           </View>

           <View style={{...styles.row3,marginTop:scale(10)}}>
<Text style={styles.sub}>
   Fabric
</Text>
<Text style={styles.des2}>
    {item.Fabric}
    </Text>

           </View>
           <View style={{...styles.row3,marginTop:scale(10)}}>
<Text style={styles.sub}>
   Season
</Text>
<Text style={styles.des2}>
    {item.Season}
    </Text>

           </View>

           <View style={{...styles.row3,marginTop:scale(10)}}>
<Text style={styles.sub}>
   Discount Percentage
</Text>
<Text style={styles.des2}>
    {item.SalePercentage}
    </Text>

           </View>
        </View>
        </View>

    </View>
  )
}