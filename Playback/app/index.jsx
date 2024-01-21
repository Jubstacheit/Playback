import { useRouter, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RAWG_KEY, DB } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, icons, images, SIZES } from "../constants";
import styles from "../styles/home";
// Import components
import Title from "../components/Title/Title.jsx";
import { FlatList } from "react-native-gesture-handler";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} >
      <Title />
      <Text style={styles.subtitle}>
        Explore, list, backlog
      </Text>

      {/* Search bar */}
      <Text>Search bar</Text>

      <Text style={styles.recentGames}>Recent games</Text>
      

      {/* Game list */}
      <FlatList >

      </FlatList>
    </SafeAreaView>
  );
}

export default Home;