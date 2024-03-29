import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getGamesHome } from "../hooks/RAWGService";

import styles from "../styles/home";
// Import components
import Title from "../components/Title/Title.jsx";
import GameList from "../components/Game/GameList.jsx";

const Home = () => {
  const router = useRouter();
  const { games, isLoading, error, refetch, retryFetch } = getGamesHome();

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="dark"/>
      {/* Title */}
      <Title />
      <Text style={styles.subtitle}>
        Explore, list, backlog
      </Text>

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