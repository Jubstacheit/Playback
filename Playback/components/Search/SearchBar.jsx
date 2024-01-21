import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import styles from './searchBar.style.js'
import { COLORS } from '../../constants'

const SearchBar = () => {
	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchWrapper}>
				<TextInput 
					style={styles.searchBar} 
					value=''
					onChange={() => {}}
					placeholder='Search for a game'
				/>
			</View>
			<TouchableOpacity 
				style={styles.searchBtn}
				onPress={() => {}}
			>
				<AntDesign 
					name="search1" 
					size={24}
					color={COLORS.background}
					style={styles.searchBtnImg}
				/>
			</TouchableOpacity>
		</View>
	)
}
	
export default SearchBar;