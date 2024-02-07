import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import styles from './searchBar.style.js'
import { COLORS } from '../../constants'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')


	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchWrapper}>
				<TextInput 
					style={styles.searchBar} 
					onSubmitEditing={() => {console.log('searching')}}
					placeholder='Search for a game'
				/>
			</View>
			<TouchableOpacity 
				style={styles.searchBtn}
				onPress={() => {console.log('searching')}}
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