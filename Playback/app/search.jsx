import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/search';

import Title from '../components/Title/Title';
import SearchBar from '../components/Search/SearchBar';
import GameList from '../components/Game/GameList';
import FetchError from '../components/Error/FetchError';
import { searchGames } from '../hooks/RAWGService';
import { SIZES } from '../constants';

const Search = () => {
	const router = useRouter();
	
	const { games, isLoading, error, refetch, retryFetch, searchTerm, setSearchTerm, handleSearch, noRes } = searchGames();

	

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
			{
				noRes ?
				<View style={{marginHorizontal: SIZES.xSmall}}>
					<FetchError
						message={"No results found"}
						handlePress={retryFetch}
						noResults={noRes}
					>
					</FetchError>
				</View> : null
			}
		</SafeAreaView>
	);
};
export default Search;