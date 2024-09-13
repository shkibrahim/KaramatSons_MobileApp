// 16
import { View, Text,Image } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../Theme";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import createStyles from "./styles";
export default function WelcomeBar() {
    const [PersonImage,setPersonImage] = useState('https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww')
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } =
    useTheme();
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
    <View style={styles.bar}>
      <View style={styles.start}>
        <View style={styles.alignhello}>
          <Text style={styles.welcometxt}>Hello, Welcome</Text>
<View style={styles.hand}>
<MaterialIcons name="waving-hand" size={18} color="#ffd04d" />

    </View>          
        </View>
        <Text style={styles.Name}>Ibrahim Sheikh</Text>

      </View>

      <View style={styles.imageborder}>
      <Image source={{ uri: PersonImage }} style={styles.img} />

      </View>
    </View>
  );
}
