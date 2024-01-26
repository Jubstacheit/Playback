import { View, Text, ActivityIndicator, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

import styles from './gameList.style'
import { COLORS, SIZES } from '../../constants'

import { getGamesHome } from "../../hooks/RAWGService";

import GameCard from './GameCard'
import FetchError from '../Error/FetchError'

const GameList = () => {
	const router = useRouter();
	// Taken from RAWGService
	const { games, isLoading, error, refetch } = getGamesHome();
	// Change column number depending on platform
	const col = () => {
		if 
			(Platform.OS === 'web') {return 3} 
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

			{!error ? (
				<FetchError />
			) : null}
			
		</View>
	)
}
					
export default GameList