import { useRouter, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RAWG_KEY, DB } from "@env";

import { COLORS, icons, images, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/home";
// Import components
import Title from "../components/Title/Title.jsx";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} >
      <Title />
      

      {/* Game list */}
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;