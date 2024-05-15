import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

import { COLORS, SIZES } from '../../constants'
import { XStack, Input, Button } from 'tamagui'

const SearchBar = ({ handleSearch, searchTerm, setSearchTerm }) => {

	return (
		<XStack
			minWidth={SIZES.xxLarge}
			alignSelf='center'
			height={40}
			gap='$2'
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
				placeholder='Search for a game'
				onSubmitEditing={handleSearch}
				value={searchTerm}
				onChangeText={(text) => {setSearchTerm(text)}}
			/>
			<Button 
				size='$4'
				onPress={() => {handleSearch()}}
				backgroundColor={COLORS.tertiary}
				hoverStyle={{backgroundColor: COLORS.secondary, borderColor: COLORS.secondary}}
				focusStyle={{backgroundColor: COLORS.secondary}}
				icon={
					<AntDesign 
						name="search1" 
						size={22}
						color={COLORS.background}
					/>}
			>
				
			</Button>
		</XStack>
	)
}
	
export default SearchBar;