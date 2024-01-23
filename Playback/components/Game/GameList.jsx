import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './gameList.style'
import { COLORS, SIZES } from '../../constants'

import { getGamesHome } from "../../hooks/RAWGService";

import GameCard from './GameCard'

const GameList = () => {
	const router = useRouter();
	const [page, setPage] = useState(1);
	// Taken from RAWGService
	const { games, isLoading, error } = getGamesHome(page);

	return (
		<View style={styles.cardsContainer}>
			{isLoading ? (
				<ActivityIndicator size="large" color={COLORS.secondary} />
			) : error ? (
				<Text>
					Something went wrong
				</Text>
			) : (<FlatList 
					data={games.results} 
					style={{ color: COLORS.lightWhite }}
					renderItem={({ item }) => (
						<Text style={{ color: COLORS.lightWhite}} item={item}>
							{item.id}
						</Text>
						/*<GameCard 
							item={item}
						/>*/
					)}
					keyExtractor={item => item.id}
					contentContainerStyle={{ columnGap: SIZES.medium }}
				/>
			)}
		</View>
	)
}
					
export default GameList