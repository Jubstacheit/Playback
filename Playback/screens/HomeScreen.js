import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BACKEND_DB_HOST } from '@env';
import ProfileScreen from './ProfileScreen';
import { StyleSheet } from 'react-native';
import RAWGService from '../services/RAWGService';
import GameCard from '../components/Game/GameCard';
import colors from '../constants/Colors';
import rem from '../constants/Rem';

const RAWG_KEY = process.env.RAWG_KEY;
const DB = process.env.DB_HOST_ROUTE;

const HomeScreen = ({navigation}) => {

	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);

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
		<View style={styles.container}>
			<Text style={styles.title}>Playback</Text>
			<Text style={styles.subtitle}>Explore, list, backlog</Text>
			<FlatList
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
		</View>
		);
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			backgroundColor: colors.background,
		},
		text: {
			color: '#fff',
			fontSize: 24,
			fontWeight: 'bold',
		},
		button: {
			marginTop: 10,
			backgroundColor: colors.primary,
		},
		title: {
			color: '#fff',
			fontSize: 64,
			fontWeight: 'bold',
			marginTop: rem(5),
		},
		subtitle: {
			color: '#fff',
			fontSize: 30,
			marginBottom: rem(5),
			fontWeight: '100'
		},
	});
	
	export default HomeScreen;