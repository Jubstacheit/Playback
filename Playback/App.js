import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    );
  }