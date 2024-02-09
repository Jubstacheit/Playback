import { View, Image, Text, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './gameCard.style';
import { COLORS } from '../../constants';

// Mapping of platform names to icons
const platformIconMapping = {
	'playstation5' : 'sony-playstation',
	'xbox-series-x' : 'microsoft-xbox',
	'pc' : 'laptop',
	'nintendo-switch' : 'nintendo-switch',
	'ios' : 'apple-ios',
	'android' : 'android'
}


const GameCard = ({ item }) => {

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
						const platformName = platform.platform.slug
						const icon = platformIconMapping[platformName] || null

						return icon ? (
							<MaterialCommunityIcons key={index} style={styles.platformIcon} name={icon} size={18} color={COLORS.black} />
						) : null
					})}
				</View>
			</View>
		</TouchableOpacity>
	</View>
	) : null
}
	
export default GameCard;