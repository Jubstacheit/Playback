import { Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getPlatformIcons } from '../../hooks/PlatformIcons';

import { Card, View, Text, Heading, XStack } from 'tamagui';

import styles from './gameCard.style';
import { FONTS, SIZES } from '../../constants';


const GameCard = ({ item }) => {

	const { getlogo, platformIconMappingMaterialCommunity } = getPlatformIcons();

	// Giving a result only if the game is available on a platform
	return item.platforms && item.background_image ? (

	<XStack 
		height='auto'
		flex={1}
		flexDirection='column'
	>
		<Card
			animation="bouncy"
			size="$4"
			height={300}
			maxWidth={400}
			scale={0.9}
			hoverStyle={{ scale: 0.925 }}
			pressStyle={{ scale: 0.875 }}
		>
			<Card.Header padded>
				<Heading style={{fontFamily: FONTS.medium}} size={SIZES.medium}>{item.name}</Heading>
			</Card.Header>
			<Image
				source={{uri: item.background_image}}
				style={styles.gameImage}
			/>
			<View /*style={styles.textContainer}*/>
				<View /*style={styles.platformContainer}*/>
					{item.platforms && item.platforms.map((platform, index) => {
						const platformName = platform.platform.slug;
						const iconName = platformIconMappingMaterialCommunity[platformName] || null

						return iconName ? getlogo({iconName, index}) : null
					})}
				</View>
			</View>
		</Card>
	</XStack>
	) : null
}
	
export default GameCard;