import { View, Image, Text } from 'react-native';

import styles from './gameCard.style';

import { COLORS, FONTS, SIZES } from "../../constants";

const GameCard = ({ item }) => (
	<View style={styles.container}>
		<Image
			source={{uri: item.background_image}}
			style={{width: 192, height: 108}}
		/>
		<View>
			<Text style={{color: COLORS.lightWhite }}>{item.name}</Text>
		</View>
	</View>
);
	
export default GameCard;