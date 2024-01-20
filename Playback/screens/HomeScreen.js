import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import RAWGService from '../services/RAWGService';
import GameCard from '../components/Game/GameCard';
import colors from '../constants/Colors';
import rem from '../constants/Rem';
import SearchBar from '../components/Search/SearchBar';

const RAWG_KEY = process.env.RAWG_KEY;
const DB = process.env.DB_HOST_ROUTE;

const HomeScreen = ({navigation}) => {

	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);

	const handleSearch = (searchTerm) => {
		navigation.navigate('Search', { searchTerm });
	}

	const loadGames = () => {
		RAWGService.getGamesHome(page)
		.then(data => {
			setGames(oldGames => [...oldGames, ...data.results]);
			setPage(oldPage => oldPage + 1);
		})
	}

	useEffect(() => {
		loadGames();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleSearchContainer}>
				<Text style={styles.title}>Playback</Text>
				<Text style={styles.subtitle}>Explore, list, backlog</Text>
				<SearchBar onSearch={handleSearch} />
				<Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold', alignSelf: 'flex-start', marginHorizontal: rem(3)}}>Recent games</Text>
			</View>
			<FlatList
				style={{width: '100%'}}
				numColumns={2}
				data={games}
				keyExtractor={(item) => item.id.toString()}
				onEndReached={loadGames}
				onEndReachedThreshold={0.5}
				renderItem={({item}) => (
					<GameCard
						game={item}
					/>
				)}
			/>
		</SafeAreaView>
		);
	};
	export default HomeScreen;