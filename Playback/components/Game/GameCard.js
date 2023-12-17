import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../constants/Colors';
import rem from '../../constants/Rem';

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
			marginHorizontal: 20,
			paddingHorizontal: 15,
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
			height: hp('40%'),
		},
		image: {
			width: '100%',
			height: '70%',
			resizeMode: 'cover',
			marginVertical: 10,
		},
		title: {
			fontSize: rem(1.3),
			color: '#000000',
			fontWeight: 'bold',
		},
	});
	
	export default GameCard;