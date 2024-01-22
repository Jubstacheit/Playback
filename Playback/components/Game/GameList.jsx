import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import styles from './gameList.style'
import { COLORS, SIZES } from '../../constants'

import GameCard from './GameCard'

const GameList = ( { gameList } ) => {

	const isLoading = true

	return (
		<View style={styles.cardsContainer}>
			{isLoading ? (
				<ActivityIndicator size="large" color={COLORS.secondary} />
			) : error ? (
				<Text>
					Something went wrong
				</Text>
			) : (
				{/*<FlatList 
					data={gameList}
					renderItem={({ item }) => (
						<GameCard 
							item={item}
						/>
					)}
					keyExtractor={item => item.id}
					contentContainerStyle={{ columnGap: SIZES.medium }}
				/>*/}
			)}
		</View>
	)
}
					
export default GameList