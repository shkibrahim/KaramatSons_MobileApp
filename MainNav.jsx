import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { scale } from 'react-native-size-matters';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-paper';
import SideBar from './src/Components/SideBar/SideBar';
import { useTheme } from './Theme';
import Home from './src/Screens/TabScreens/Home/Home';
import Cart from './src/Screens/TabScreens/Cart/Cart';
import Liked from './src/Screens/TabScreens/Liked/Liked';
import Profile from './src/Screens/TabScreens/Profile/Profile';
import ProductScreen from './src/Screens/NavScreens/ProductScreen/ProductScreen';
// import Portfolio from './src/screens/Portfolio/Portfolio';
// import Services from './src/screens/Services/Services';
// import Profile from './src/screens/Profile/Profile';
// import Login from './src/screens/Login/Login';
// import Search from './src/screens/Search/Search';
// import Schedule from './src/screens/Schedule/Schedule';
// import AboutUs from './src/Components/AboutUs/AboutUs';
// import PrivacyPolicy from './src/screens/PrivacyPolicy/PrivacyPolicy';
// import Terms from './src/screens/Terms/Terms';
// import Chat from './src/screens/Chat/Chat';
// import ContactUs from './src/screens/ContactUs/ContactUs';
// import About from './src/screens/About/About';
// import MessageView from './src/screens/Chat/MessageView/MessageView';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const FurtherOptions ={
  headerShown : false,
  animation : "slide_from_right"
}

const TabNavigator = () => {
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme ,IconsColor,bar,circle} = useTheme();

  return(
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true, // Added here to apply globally
        tabBarStyle: {
          backgroundColor: bar,
          position: 'absolute',
          height: scale(60),
          marginBottom: scale(16),
          marginHorizontal:scale(10),
          borderRadius: scale(37),
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarActiveTintColor: primary,
          animation: 'slide_from_bottom',
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.background, backgroundColor: circle }}>
              <Icon
                source={focused ? 'home-variant' : 'home-variant-outline'}
                size={26}
                color={focused ? IconsColor : '#e7e7e7'}
              />
            </View>
          ),
        }}
        component={Home}
      />

      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarActiveTintColor: primary,
          animation: 'slide_from_bottom',
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.background, backgroundColor: circle }}>
              <Icon
                source={focused ? 'bag-personal' : 'bag-personal-outline'}
                size={21}
                color={focused ? IconsColor : '#e7e7e7'}
              />
            </View>
          ),
        }}
        component={Cart}
      />

      <Tab.Screen
        name="Liked"
        options={{
          headerShown: false,
          tabBarActiveTintColor: primary,
          animation: 'slide_from_bottom',
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.background, backgroundColor: circle }}>
              <Icon
                source={focused ? 'cards-heart' : 'cards-heart-outline'}
                size={21}
                color={focused ? IconsColor : '#e7e7e7'}
              />
            </View>
          ),
        }}
        component={Liked}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarActiveTintColor: primary,
          animation: 'slide_from_bottom',
          tabBarIcon: ({ focused }) => (
            <View style={{ ...styles.background, backgroundColor: circle }}>
              <Icon
                source={focused ? 'account-circle' : 'account-circle-outline'}
                size={21}
                color={focused ? IconsColor : '#e7e7e7'}
              />
            </View>
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};



  



  const StackNavigator = ({isAuthenticated}) => (
    <Stack.Navigator 
    initialRouteName={isAuthenticated ? 'TabStart' :  'TabStart'}
    >

    <Stack.Screen
      name="TabStart"
      component={TabNavigator}
      options={{headerShown: false, animation: 'slide_from_bottom'}}
    />
   <Stack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{headerShown: false, animation: 'slide_from_left'}}
    />
     {/* <Stack.Screen
      name="MessageView"
      component={MessageView}
      options={{ headerShown: false, animation: 'slide_from_left',  }}
    />

<Stack.Screen
      name="Chat"
      component={Chat}
      options={{ headerShown: false, animation: 'slide_from_right',  }}
    /> */}
    {/* <Stack.Screen
      name="MessageView"
      component={MessageView}
      options={{headerShown: false, animation: 'slide_from_left'}}
    />

   */}
  
      </Stack.Navigator>
);

const MainNav = () => {
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme,IconsColor,bar } =
  useTheme();

const [isAuthenticated,setisAuthenticated] = useState(false)
const navigationRef = useRef()
return (
  <NavigationContainer  ref={navigationRef}>
  <StatusBar
    backgroundColor={theme=='light'? 'transparent' : 'black'}
    barStyle="dark-content"
  />

  <Drawer.Navigator drawerContent={() => <SideBar />}>
    <Drawer.Screen name="Menu" options={{headerShown: false}}>
      {() => <StackNavigator isAuthenticated={isAuthenticated} />}
    </Drawer.Screen>
    

{/* <Drawer.Screen
      name="Search"
      options={{
        headerShown: false,
      }}
      component={Search}
    /> */}
    {/* <Drawer.Screen
      name="Chat"
      options={{
        headerShown: false,
      }}
      component={Chat}
    /> */}
     {/* <Drawer.Screen
      name="ContactUs"
      options={{
        headerShown: false,
      }}
      component={ContactUs}
    />
    <Drawer.Screen
      name="Schedule"
      options={{
        headerShown: false,
      }}
      component={Schedule}
    />
     <Drawer.Screen
      name="About"
      options={{
        headerShown: false,
      }}
      component={About}
    />
     <Drawer.Screen
      name="AboutUs"
      options={{
        headerShown: false,
      }}
      component={AboutUs}
    />
    <Drawer.Screen
      name="PrivacyPolicy"
      options={{
        headerShown: false,
      }}
      component={PrivacyPolicy}
    />
     <Drawer.Screen
      name="Terms"
      options={{
        headerShown: false,
      }}
      component={Terms}
    /> */}
  </Drawer.Navigator>
</NavigationContainer>
  );
};





const styles = StyleSheet.create({

  background:{
    borderRadius:scale(40),
    width:scale(40),overflow:'hidden',
    height:scale(40),alignItems:"center",justifyContent:"center",
  }
})
export default MainNav;