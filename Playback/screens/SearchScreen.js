import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import RAWGService from '../services/RAWGService';
import { useNavigation } from '@react-navigation/native';
import GameCard from '../components/Game/GameCard';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import rem from '../constants/Rem';
import SearchBar from '../components/Search/SearchBar';

const SearchScreen = ({route, navigation}) => {
    
    const [games, setGames] = useState([]);
    const [localSearchTerm, setLocalSearchTerm] = useState(route.params?.searchTerm || '');

    useEffect(() => {
        const fetchGames = async () => {
            if (localSearchTerm) {
                const data = await RAWGService.search(localSearchTerm);
                setGames(data.results);
            }
        };
        fetchGames();
    }, [localSearchTerm]);

    const handleSearch = async (newSearchTerm) => {
        setLocalSearchTerm(newSearchTerm);
    };

    return (
        <View style={styles.container}>
			<View style={styles.topContainer}>
            	<SearchBar onSearch={handleSearch} />
			</View>
            <FlatList
                style={{width: '100%'}}
                numColumns={2}
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <GameCard
                        game={item}
                    />
                )}
            />
        </View>
    );
};

		const styles = StyleSheet.create({
			container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				backgroundColor: colors.background,
			},
			topContainer: {
				width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: rem(1),
			},
		});
		
		export default SearchScreen;
