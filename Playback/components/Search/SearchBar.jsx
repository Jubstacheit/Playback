import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { COLORS, SIZES } from '../../constants'
import { XStack, Button, Input } from 'tamagui'

const SearchBar = ({ handleSearch, searchTerm, setSearchTerm }) => {

	return (
		<XStack
			minWidth={SIZES.xxLarge}
			alignSelf='center'
			height={40}
			space='$2'
			margin='$4'
			padding='$2'
		>
			<Input 
				flex={1}
				size='$4'
				borderWidth={2}
				borderColor={COLORS.tertiary}
				hoverStyle={{borderColor: COLORS.secondary}}
				focusStyle={{borderColor: COLORS.secondary}}
				onSubmitEditing={handleSearch}
				placeholder='Search for a game'
				value={searchTerm}
				onChangeText={(text) => {setSearchTerm(text)}}
			/>
			<Button 
				size='$4'
				backgroundColor={COLORS.tertiary}
				borderWidth={2}
				borderColor={COLORS.primary}
				hoverStyle={{backgroundColor: COLORS.secondary}}
				focusStyle={{backgroundColor: COLORS.secondary}}
				onPress={handleSearch}
			>
				<AntDesign 
					name="search1" 
					size={22}
					color={COLORS.background}
				/>
			</Button>
		</XStack>
	)
}
	
export default SearchBar;