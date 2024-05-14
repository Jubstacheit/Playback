import { ActivityIndicator, Platform, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../constants'


import GameCard from './GameCard'
import FetchError from '../Error/FetchError'

import { Text, View, XStack } from 'tamagui'

const GameList = ({ games, retryFetch, isLoading, error, refetch }) => {
	const router = useRouter();

	// Change column number depending on platform, or screen width on web
	const col = () => {
		if 
			(Platform.OS === 'web') {
				const width = Dimensions.get('window').width
				if (width > 1000) {
					return 5
				} else if (width > 800) {
					return 4
				} else if (width > 600) {
					return 3
				} else {
					return 2
				}
			} 
		else {
			return 2
		}
	}

	return (
		<XStack flex={1}>
			<FlatList 
				data={games}
				renderItem={({ item }) => (
					<GameCard 
						item={item}
					/>
				)}
				keyExtractor={item => item.id}
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
					noResults={false}
				/>
			) : null}
			
		</XStack>
	)
}
					
export default GameList