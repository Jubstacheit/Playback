import { useRouter, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
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
      

      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;