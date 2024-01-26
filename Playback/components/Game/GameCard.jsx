import { View, Image, Text } from 'react-native';

import styles from './gameCard.style';

import { COLORS, FONTS, SIZES } from "../../constants";

const GameCard = ({ item }) => (
	<View style={styles.container}>
		<Image
			source={{uri: item.background_image}}
			style={styles.gameImage}
		/>
		<View>
			<Text style={styles.gameTitle}>{item.name}</Text>
		</View>
	</View>
);
	
export default GameCard;