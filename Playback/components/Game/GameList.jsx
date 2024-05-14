import { View, Text, ActivityIndicator, Platform, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../constants'


import GameCard from './GameCard'
import FetchError from '../Error/FetchError'

import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config);

const GameList = ({ games, retryFetch, isLoading, error, refetch }) => {
	const router = useRouter();

	// Change column number depending on platform, or screen width on web
	const col = () => {
		if 
			(Platform.OS === 'web') {
				const width = Dimensions.get('window').width
				if (width > 1000) {
					return 5
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
		<TamaguiProvider config={tamaguiConfig}>
			<View style={{ flex: 1, flexDirection: 'column', marginVertical: SIZES.xSmall }}>
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
						noResults={false}
					/>
				) : null}
				
			</View>
		</TamaguiProvider>
	)
}
					
export default GameList