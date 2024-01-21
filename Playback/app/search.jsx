import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/search';

import Title from '../components/Title/Title';

const Search = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Title />
		</SafeAreaView>
	);
};
export default Search;