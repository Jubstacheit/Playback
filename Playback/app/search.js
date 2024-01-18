import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

const Search = () => {
	const router = useRouter();

	return (
		<View>
			<Text>Search Page</Text>
		</View>
	);
};
export default Search;