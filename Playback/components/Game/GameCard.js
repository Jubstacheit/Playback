import { View, Image, Text } from 'react-native';
import { COLORS } from '../../constants';
import styles from './gameCard.style';

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