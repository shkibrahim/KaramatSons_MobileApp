import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export default function RenderProducts({ item, index, length,visibleProducts, }) {
  const {
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,bar,
    toggleTheme,
    DarkLogo,
  } = useTheme();
  const navigation = useNavigation();
  const styles = createStyles({
    Tcolor,
    primary,bar,
    secondary,
    DarkLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={() => navigation.navigate('ProductScreen',{
      item:item
    })}
     style={[styles.viewitem, ]}>
        {/* <View>

        </View> */}
        <View style={styles.rowabsolute}>
        {item.onSale == true ?   <View style={styles.saleicon}>
   <Text style={styles.saleicontxt}>{item.SalePercentage}%</Text>
    </View> :
    <View></View>}
<TouchableOpacity style={styles.fav}>
    <MaterialIcons name="favorite-outline" size={20} color="white" />
    </TouchableOpacity>


  
        </View>
      <View style={styles.imagecontainer}>
        <Image source={{ uri: item.Images[0].Image }} style={styles.img} />
      </View>

      <View style={styles.row}>
        <Text style={styles.Title}>{item.Title}</Text>
        <TouchableOpacity style={styles.absolutebtn}>
          <Icon source={"bag-personal"} size={29} color={"#000"} />
        </TouchableOpacity>
      </View>
      {item.onSale == true && (
        <Text style={styles.price}>
          PKR{" "}
          {item.RetailPrice - (item.SalePercentage / 100) * item.RetailPrice}
        </Text>
      )}
      <Text style={[item.onSale ? styles.sale : styles.price]}>
        PKR {item.RetailPrice}
      </Text>

      {item.onSale == true && (
        <Text style={styles.savetxt}>
          SAVE PKR {(item.SalePercentage / 100) * item.RetailPrice}
        </Text>
      )}
    </TouchableOpacity>
  );
}
