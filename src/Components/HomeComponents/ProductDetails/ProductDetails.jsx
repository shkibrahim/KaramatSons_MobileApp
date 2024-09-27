import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import createStyles from './styles'
import Entypo from '@expo/vector-icons/Entypo'
import { useTheme } from '../../../../Theme'
import { Button } from 'react-native-paper'
export default function ProductDetails({item,Quantity,setQuantity}) {
    const {
        Tcolor,
        primary,
        secondary,
        background,
        theme,
        logo,
        toggleTheme,
        DarkLogo,
    } = useTheme()
    const styles = createStyles({
        Tcolor,
        primary,
        secondary,
        DarkLogo,
        background,
        theme,
        logo,
        toggleTheme,
    })

    const QuantityDecreaser = ()=>{
        if (Quantity>1){
            setQuantity(Quantity-1)
        }
    }

    const QuantityIncreaser = ()=>{
        if (Quantity<item.Stock && Quantity<100){
            setQuantity(Quantity+1)
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.codetitle}>SKU#: <Text style={styles.code}>{item.ProductCode}</Text></Text>
      {item.Stock ? 
  <Text style={styles.stock}>In Stock</Text> : 
  <Text style={styles.stockred}>Out of Stock</Text>
}

<View style={styles.row}>
<Text style={styles.price}>PKR  {item.RetailPrice- ((item.SalePercentage/100)*item.RetailPrice)}</Text>
<Text style={styles.originalprice}>PKR  {item.RetailPrice}</Text>
    </View>

    <Text style={styles.savepkr}>SAVE PKR {(item.SalePercentage/100)*item.RetailPrice}</Text>

    <Text style={styles.Quantitytxt}>Quantity</Text>

    <View style={styles.boxrow}>
    <TouchableOpacity onPress={()=>QuantityDecreaser()}><Entypo name="minus" size={24} color={Tcolor} /></TouchableOpacity>
    <Text style={styles.price}>{Quantity}</Text>
    <TouchableOpacity  onPress={()=>QuantityIncreaser()}>
        <Entypo name="plus" size={24} color={Tcolor} />
            </TouchableOpacity>
        </View>
    </View>
  )
}