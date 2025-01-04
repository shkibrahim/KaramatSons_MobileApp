import React ,{useRef,useEffect,useState}from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox,StatusBar} from 'react-native';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{level: 'error'}]);
LogBox.ignoreAllLogs();
import {PaperProvider} from 'react-native-paper';
import { Themer } from './Theme';
import MainNav from './MainNav';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
// import { StatusBar } from 'expo-status-bar';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
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
    {/* <PaperProvider> */}
      {/* <StatusBar style="dark" backgroundColor='#000' translucent  /> */}
      <MainNav  />
    {/* </PaperProvider> */}
  </Themer>
  );
}
