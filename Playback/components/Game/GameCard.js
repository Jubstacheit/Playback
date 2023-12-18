import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import rem from '../../constants/Rem';

const GameCard = ({ game }) => (
	<View style={styles.card}>
	<Image
	style={styles.image}
	source={{uri: game.background_image}}
	/>
	<View style={styles.titleContainer}>
		<Text style={styles.title}>{game.name}</Text>
	</View>
	</View>
	);
	
	const styles = StyleSheet.create({
		card: {
			width: '45%',
			height: rem(20),
			margin: rem(1),
			borderRadius: 10,
			shadowColor: '#000000',
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 1,
			shadowRadius: 4.65,
			elevation: 7,
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: 'black',
		},
		image: {
			width: '100%',
			height: '80%',
			borderTopLeftRadius: 10,
			borderTopRightRadius: 10,
			resizeMode: 'cover',
			position: 'relative',
			top: 0,
			left: 0,
		},
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		title: {
			color: '#fff',
			fontSize: rem(1.5),
			fontWeight: 'bold',
		},
	});
	
	export default GameCard;