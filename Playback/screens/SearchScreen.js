import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchScreen = ({navigation}) => {
	const [searchText, setSearchText] = useState('');

	const handleSearch = () => {
		// Perform search logic here
		console.log('Searching for:', searchText);
	};

	return (
		<View>
			<TextInput
				placeholder="Enter search text"
				value={searchText}
				onChangeText={setSearchText}
			/>
			<Button title="Search" onPress={handleSearch} />
		</View>
	);
};

export default SearchScreen;
