import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/search';

import Title from '../components/Title/Title';
import SearchBar from '../components/Search/SearchBar';
import GameList from '../components/Game/GameList';
import { searchGames } from '../hooks/RAWGService';

const Search = () => {
	const router = useRouter();
	
	const { fetchSearch, games, isLoading, error, refetch, retryFetch, searchTerm, setSearchTerm } = searchGames();

	const handleSearch = () => {
		if (searchTerm) {
			fetchSearch(searchTerm);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Title />

			{/* Search bar */}
			<SearchBar 
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			{/* Search results as a gamelist */}
			<GameList 
				games={games}
				retryFetch={retryFetch}
				isLoading={isLoading}
				error={error}
				refetch={refetch}
			/>



		</SafeAreaView>
	);
};
export default Search;