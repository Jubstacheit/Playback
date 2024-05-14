import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { getGamesHome } from "../hooks/RAWGService";

// Import components
import Title from "../components/Title/Title.jsx";
import GameList from "../components/Game/GameList.jsx";

import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { H2, H3, Text } from "tamagui";
import { config } from '@tamagui/config/v3'
import { COLORS, FONTS, SIZES } from "../constants/theme.js";
const tamaguiConfig = createTamagui(config);

const Home = () => {
  const router = useRouter();
  const { games, isLoading, error, refetch, retryFetch } = getGamesHome();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }} >
        <StatusBar style="dark"/>
        {/* Title */}
        <Title />
        <Text 
          fontSize={SIZES.large} 
          marginBottom={SIZES.medium} 
          fontFamily={FONTS.medium} 
          textAlign="center"
        >
          Explore, list, backlog
        </Text>

        {/* Game list with home games*/}
        <GameList 
          games={games}
          retryFetch={retryFetch}
          isLoading={isLoading}
          error={error}
          refetch={refetch}
        />
      </SafeAreaView>
    </TamaguiProvider>
  );
}

export default Home;