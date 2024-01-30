import { View, Text, ActivityIndicator, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

import styles from './gameList.style'
import { COLORS, SIZES } from '../../constants'

import { getGamesHome } from "../../hooks/RAWGService";

import GameCard from './GameCard'
import FetchError from '../Error/FetchError'

const GameList = ({ games, retryFetch, isLoading, error, refetch }) => {
	const router = useRouter();
	// Change column number depending on platform
	const col = () => {
		if 
			(Platform.OS === 'web') {return 5} 
		else {
			return 2
		}
	}

	return (
		<View style={styles.container}>
			<FlatList 
				data={games}
				renderItem={({ item }) => (
					<GameCard 
						item={item}
					/>
				)}
				keyExtractor={item => item.id}
				contentContainerStyle={{ gap: SIZES.medium }}
				onEndReached={refetch}
				onEndReachedThreshold={1}
				ListFooterComponent={isLoading ? <ActivityIndicator size="large" color={COLORS.secondary} /> : null}
				numColumns={col()}
				showsVerticalScrollIndicator={false}
			/>

			{error ? (
				<FetchError 
					message={error.message}
					handlePress={retryFetch}
				/>
			) : null}
			
		</View>
	)
}
					
export default GameList