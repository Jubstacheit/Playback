import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <Tabs.Navigator
      screenOptions={
        {
          headerShown: false
        }
    }>
      <Tabs.Screen name="Home" component={HomeScreen} 
      // Icon in assets folder 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Image 
        source={require('./assets/icon.png')} // replace with your image path
        style={{height: 26, width: 26 }} 
      />
        ),
      }}/>
      <Tabs.Screen name="Search" component={SearchScreen} 
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26} />
        ),
      }}/>
      <Tabs.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      
      }}/>
    </Tabs.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    );
  }