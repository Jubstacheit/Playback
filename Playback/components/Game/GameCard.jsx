import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './gameCard.style';


const GameCard = ({ item }) => (
	<View style={styles.container}>
		<TouchableOpacity>
			<Image
				source={{uri: item.background_image}}
				style={styles.gameImage}
			/>
			<View style={styles.titleContainer}>
				<Text style={styles.gameTitle}>{item.name}</Text>
			</View>
		</TouchableOpacity>
		
	</View>
);
	
export default GameCard;