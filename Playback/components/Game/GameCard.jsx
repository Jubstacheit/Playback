import { View, Image, Text, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getPlatformIcons } from '../../hooks/PlatformIcons';

import styles from './gameCard.style';


const GameCard = ({ item }) => {

	const { getlogo, platformIconMappingMaterialCommunity } = getPlatformIcons();

	// Giving a result only if the game is available on a platform
	return item.platforms && item.background_image ? (

	<View style={styles.container}>
		<TouchableOpacity>
			<Image
				source={{uri: item.background_image}}
				style={styles.gameImage}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.gameTitle} numberOfLines={2} ellipsizeMode={'tail'}>{item.name}</Text>
				<View style={styles.platformContainer}>
					{item.platforms && item.platforms.map((platform, index) => {
						const platformName = platform.platform.slug;
						const iconName = platformIconMappingMaterialCommunity[platformName] || null

						return iconName ? getlogo({iconName, index}) : null
					})}
				</View>
			</View>
		</TouchableOpacity>
	</View>
	) : null
}
	
export default GameCard;