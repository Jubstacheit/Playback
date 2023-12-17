import { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import rem from '../../constants/Rem';
import RAWGService from '../../services/RAWGService';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
	const [games, setGames] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	
	const handleSearch = async () => {
		RAWGService.search(searchTerm)
		.then(data => {
			setGames(data.results);
		})
	};
	
	return (
		<View style={styles.container}>
		<MaterialIcons name="search" size={24} color="black" />
		<TextInput
		style={styles.input}
		placeholder="Search..."
		onChangeText={setSearchTerm}
		onSubmitEditing={handleSearch}
		onEndEditing={handleSearch}
		/>
		<Feather name="arrow-right" size={24} color="black" onPress={handleSearch} />
		{games.map((game, index) => ( // Map over the games array
		<Text key={index} style={{color: 'white'}}>{game.name}</Text> // Render each game's name
		))}
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
			marginVertical: rem(2.5),
		},
		input: {
			flex: 1,
			marginHorizontal: 10,
		},
	});
	
	export default SearchBar;