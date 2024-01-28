import { useRouter, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { RAWG_KEY, DB } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import { COLORS, icons, images, SIZES } from "../constants";
import { getGamesHome } from "../hooks/RAWGService";

import styles from "../styles/home";
// Import components
import Title from "../components/Title/Title.jsx";
import SearchBar from "../components/Search/SearchBar.jsx";
import GameList from "../components/Game/GameList.jsx";

const Home = () => {
  const router = useRouter();
  const { games, isLoading, error, refetch, retryFetch } = getGamesHome();

  return (
    <SafeAreaView style={styles.container} >
      <Title />
      <Text style={styles.subtitle}>
        Explore, list, backlog
      </Text>

      {/* Search bar */}
      <SearchBar />

      <Text style={styles.recentGames}>Recent games</Text>
      

      {/* Game list with home games*/}
      <GameList 
        games={games}
        retryFetch={retryFetch}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      />
    </SafeAreaView>
  );
}

export default Home;