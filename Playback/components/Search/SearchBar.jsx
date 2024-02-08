import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import styles from './searchBar.style.js'
import { searchGames } from '../../hooks/RAWGService'
import { COLORS } from '../../constants'

const SearchBar = ({ handleSearch, searchTerm, setSearchTerm }) => {

	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchWrapper}>
				<TextInput 
					style={styles.searchBar} 
					onSubmitEditing={handleSearch}
					placeholder='Search for a game'
					value={searchTerm}
					onChangeText={(text) => {setSearchTerm(text)}}
				/>
			</View>
			<TouchableOpacity 
				style={styles.searchBtn}
				onPress={handleSearch}
			>
				<AntDesign 
					name="search1" 
					size={22}
					color={COLORS.background}
					style={styles.searchBtnImg}
				/>
			</TouchableOpacity>
		</View>
	)
}
	
export default SearchBar;