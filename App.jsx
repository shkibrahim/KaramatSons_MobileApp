import React ,{useRef,useEffect,useState}from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox,} from 'react-native';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{level: 'error'}]);
LogBox.ignoreAllLogs();
import {PaperProvider} from 'react-native-paper';
import { Themer } from './Theme';
import MainNav from './MainNav';

export default function App() {
const [loaded]=useFonts({
  PoppinsR: require('./assets/fonts/Poppins-Regular.ttf'),
  PoppinsB: require('./assets/fonts/Poppins-Bold.ttf'),
  PoppinsSB: require('./assets/fonts/Poppins-SemiBold.ttf'),
  PoppinsT: require('./assets/fonts/Poppins-Thin.ttf'),
  PoppinsSuper:require('./assets/fonts/Poppins-Black.ttf'),
  PoppinsM: require('./assets/fonts/Poppins-Medium.ttf'),
  PoppinsL: require('./assets/fonts/Poppins-Light.ttf'),
AG: require('./assets/fonts/AGUIRRE.ttf')
})

if (!loaded){
  return null
}



  return (
    <Themer>
    <PaperProvider>
      <MainNav  />
    </PaperProvider>
  </Themer>
  );
}
