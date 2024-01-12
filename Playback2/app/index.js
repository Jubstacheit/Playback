import { useRouter, Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
// Import components

const RAWG_KEY = process.env.RAWG_KEY;
const DB = process.env.DB_HOST_ROUTE;

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }} >
      <Stack.Screen 
      options={{
        headerStyle: {backgroundColor: COLORS.tertiary},
        headerShadowVisible: false,
        headerTitle: ''
      }}/>

      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;