import { useRouter, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RAWG_KEY, DB } from "@env";

import { COLORS, icons, images, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
// Import components

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }} >
      

      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;