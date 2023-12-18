import { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import rem from '../../constants/Rem';
import RAWGService from '../../services/RAWGService';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");
	
	const handleSearch = () => {
		onSearch(searchTerm);
	};
	
	return (
		<View style={styles.container}>
		<MaterialIcons name="search" size={24} color="black" />
		<TextInput
		style={styles.input}
		placeholder="Search..."
		onChangeText={setSearchTerm}
		onSubmitEditing={handleSearch}
		/>
		<Feather name="arrow-right" size={24} color="black" onPress={handleSearch} />
		</View>
		);
	};
	
	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: 'white',
			marginHorizontal: 'auto',
			width: rem(30),
			padding: 10,
			borderRadius: 5,
			marginVertical: rem(2),
		},
		input: {
			flex: 1,
			marginHorizontal: 10,
		},
	});
	
	export default SearchBar;