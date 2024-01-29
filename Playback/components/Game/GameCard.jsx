import { View, Image, Text, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './gameCard.style';


const GameCard = ({ item }) => (
	<View style={styles.container}>
		<TouchableOpacity>
			<Image
				source={{uri: item.background_image}}
				style={styles.gameImage}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.gameTitle}>{item.name}</Text>
				<View style={styles.platformContainer}>
					{item.platforms.map((platform, index) => (

						<Text 
							style={styles.platformIcon}
							key={platform.platform.id}
						>
							
							{platform.platform.name}
						</Text>
					))}
				</View>
			</View>
		</TouchableOpacity>
		
	</View>
);
	
export default GameCard;