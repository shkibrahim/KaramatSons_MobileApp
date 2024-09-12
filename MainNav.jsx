import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { scale } from 'react-native-size-matters';
import {Icon} from 'react-native-paper';
import Home from './src/screens/Home/Home';
import SideBar from './src/Components/SideBar/SideBar';
import { useTheme } from './Theme';
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
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } =
  useTheme();
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: 'red',
          marginBottom: 5,
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0.5,

          elevation: 5,
          paddingVertical: 5,
          height: scale(60),
        },
        tabBarActiveTintColor: '#2874F0',
        tabBarInactiveTintColor: '#333',
      }}>
    <Tab.Screen
  name="Home"
  options={{
    tabBarInactiveTintColor: '#444',
    tabBarLabel: 'Home',
    tabBarLabelStyle: {
      fontFamily:'PoppinsR',
      marginBottom: scale(5),
    },
    headerShown: false,
    tabBarActiveTintColor: primary,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
    tabBarIcon: ({ focused }) => (
      <View
        style={
          focused
            ? {
                backgroundColor: '#e7e7e7',
                // paddingVertical: scale(9),
                // marginTop:scale(5),
                height:scale(29),alignItems:"center",justifyContent:"center",
                paddingHorizontal:scale(15),
                borderRadius: scale(14),
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                // elevation: 5,
              }
            : {}
        }
      >
        <Icon
          source={focused ? 'home' : 'home-outline'}
          size={21}
          color={focused ? primary : '#444'}
        />
      </View>
    ),
  }}
  component={Home}
/>



<Tab.Screen
  name="Services"
  options={{
    tabBarInactiveTintColor: '#444',
    tabBarLabel: 'Services',
    tabBarLabelStyle: {
      fontFamily:'PoppinsR',
      marginBottom: scale(5),
    },
    headerShown: false,
    tabBarActiveTintColor: primary,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
    tabBarIcon: ({ focused }) => (
      <View
        style={
          focused
            ? {
                backgroundColor: '#e7e7e7',
                // paddingVertical: scale(9),
                // marginTop:scale(5),
                height:scale(29),alignItems:"center",justifyContent:"center",
                paddingHorizontal:scale(15),
                borderRadius: scale(14),
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                // elevation: 5,
              }
            : {}
        }
      >
        <Icon
          source={focused ? 'cookie-settings' : 'cookie-settings-outline'}
          size={21}
          color={focused ? primary : '#444'}
        />
      </View>
    ),
  }}
  component={Services}
/>

<Tab.Screen
  name="Portfolio"
  options={{
    tabBarInactiveTintColor: '#444',
    tabBarLabel: 'Portfolio',
    tabBarLabelStyle: {
      fontFamily:'PoppinsR',
      marginBottom: scale(5),
    },
    headerShown: false,
    tabBarActiveTintColor: primary,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
    tabBarIcon: ({ focused }) => (
      <View
        style={
          focused
            ? {
                backgroundColor: '#e7e7e7',
                // paddingVertical: scale(9),
                // marginTop:scale(5),
                height:scale(29),alignItems:"center",justifyContent:"center",
                paddingHorizontal:scale(15),
                borderRadius: scale(14),
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                // elevation: 5,
              }
            : {}
        }
      >
        <Icon
          source={focused ? 'briefcase-eye' : 'briefcase-eye-outline'}
          size={21}
          color={focused ? primary : '#444'}
        />
      </View>
    ),
  }}
  component={Portfolio}
/>
    
<Tab.Screen
  name="Profile"
  options={{
    tabBarInactiveTintColor: '#444',
    tabBarLabel: 'Profile',
    tabBarLabelStyle: {
      fontFamily:'PoppinsR',
      marginBottom: scale(5),
    },
    headerShown: false,
    tabBarActiveTintColor: primary,
    tabBarHideOnKeyboard: true,
    animation: 'slide_from_bottom',
    tabBarIcon: ({ focused }) => (
      <View
        style={
          focused
            ? {
                backgroundColor: '#e7e7e7',
                // paddingVertical: scale(9),
                // marginTop:scale(5),
                height:scale(29),alignItems:"center",justifyContent:"center",
                paddingHorizontal:scale(15),
                borderRadius: scale(14),
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                // elevation: 5,
              }
            : {}
        }
      >
        <Icon
          source={focused ? 'account-circle' : 'account-circle-outline'}
          size={21}
          color={focused ? primary : '#444'}
        />
      </View>
    ),
  }}
  component={Profile}
/>

    </Tab.Navigator>
  )
}


  



  const StackNavigator = ({isAuthenticated}) => (
    <Stack.Navigator 
    initialRouteName={isAuthenticated ? 'Login' :  'Login'}
    >

    <Stack.Screen
      name="TabStart"
      component={TabNavigator}
      options={{headerShown: false, animation: 'slide_from_bottom'}}
    />
   <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false, animation: 'slide_from_left',gestureEnabled: false ,}}
    />
     <Stack.Screen
      name="MessageView"
      component={MessageView}
      options={{ headerShown: false, animation: 'slide_from_left',  }}
    />

<Stack.Screen
      name="Chat"
      component={Chat}
      options={{ headerShown: false, animation: 'slide_from_right',  }}
    />
    {/* <Stack.Screen
      name="MessageView"
      component={MessageView}
      options={{headerShown: false, animation: 'slide_from_left'}}
    />

   */}
  
      </Stack.Navigator>
);

const MainNav = () => {
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } =
  useTheme();

const [isAuthenticated,setisAuthenticated] = useState(false)
const navigationRef = useRef()
return (
  <NavigationContainer  ref={navigationRef}>
  <StatusBar
    backgroundColor={theme=='light'? 'black' : primary}
    barStyle="light-content"
  />

  <Drawer.Navigator drawerContent={() => <SideBar />}>
    <Drawer.Screen name="Menu" options={{headerShown: false}}>
      {() => <StackNavigator isAuthenticated={isAuthenticated} />}
    </Drawer.Screen>
    

<Drawer.Screen
      name="Search"
      options={{
        headerShown: false,
      }}
      component={Search}
    />
    {/* <Drawer.Screen
      name="Chat"
      options={{
        headerShown: false,
      }}
      component={Chat}
    /> */}
     <Drawer.Screen
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
    />
  </Drawer.Navigator>
</NavigationContainer>
  );
};


export default MainNav;