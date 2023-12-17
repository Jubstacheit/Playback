import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
// Regular import doesn't work, so we need to use the following:
import axios from '../node_modules/axios';
import { BACKEND_DB_HOST } from '@env';
import ProfileScreen from './ProfileScreen';
import { StyleSheet } from 'react-native';
import RAWGService from '../services/RAWGService';
import GameCard from '../components/Game/GameCard';
import colors from '../constants/Colors';

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
		}
	});
	
	export default HomeScreen;