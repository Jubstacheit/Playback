import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import AppRouter from './navigation/Router';

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

export default function App() {

  if (Platform.OS === 'web') {
    return (
      <AppRouter />
    );
  }

  return (
    <NavigationContainer>
          <Tabs.Navigator
      screenOptions={
        {
          headerShown: false
        }
    }>
      <Tabs.Screen name="Home page" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
    </NavigationContainer>
    );
  }