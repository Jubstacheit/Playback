import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import RAWGService from '../services/RAWGService';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({route}) => {
	
	const [games, setGames] = useState([]);
	const { searchTerm } = route.params || {};
	
	useEffect(() => {
		const fetchGames = async () => {
			if (searchTerm) {
				const data = await RAWGService.search(searchTerm);
				setGames(data.results);
			}
		};
		fetchGames();
	}, [searchTerm]);
	
	return (
		<View>
		{games.map((game, index) => (
			<Text key={index}>{game.name}</Text>
			))}
			</View>
			);
		};
		
		export default SearchScreen;
