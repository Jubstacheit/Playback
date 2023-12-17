import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../constants/Colors';

const GameCard = ({ game }) => (
	<View style={styles.card}>
	<Image
	style={styles.image}
	source={{uri: game.background_image}}
	/>
	<Text id={`GameCard` + `game.id`} style={styles.title}>{game.name}</Text>
	</View>
	);
	
	const styles = StyleSheet.create({
		card: {
			width: wp('40%'),
			backgroundColor: colors.primary,
			marginVertical: 10,
			marginhorizontal: 10,
			padding: 10,
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
			height: hp('30%'),
		},
		image: {
			width: '100%',
			height: '70%',
			resizeMode: 'cover',
			marginVertical: 10,
		},
		title: {
			fontSize: 20,
			color: '#000000',
			marginVertical: 10,
			fontWeight: 'bold',
			marginHorizontal: 10,
		},
	});
	
	export default GameCard;