import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getPlatformIcons } from '../../hooks/PlatformIcons';

import { Card, Image, View, Text, XStack, H2, H4 } from 'tamagui';

import { COLORS, FONTS, SIZES } from '../../constants';


const GameCard = ({ item }) => {

	const { getlogo, platformIconMappingMaterialCommunity } = getPlatformIcons();

	// Giving a result only if the game is available on a platform
	return item.platforms && item.background_image ? (

	<XStack
		margin={10}
		flex={1}
		flexDirection='column'
	>
		<Card
			borderRadius={SIZES.xxLarge}
			size="$2"
			elevate
			bordered
			animation="bouncy"
			height={300}
			width={180}
			scale={0.95}
			hoverStyle={{ scale: 0.925 }}
			pressStyle={{ scale: 0.895 }}
		>
			<Card.Header padded borderRadius={SIZES.medium}>
				<H4 opacity={0.9} padding={SIZES.xSmall} fontSize={SIZES.medium} backgroundColor={COLORS.lightWhite}>{item.name}</H4>
			</Card.Header>

			<Card.Footer size='$2' flexDirection='row' backgroundColor={COLORS.lightWhite} opacity={0.9}>
					{item.platforms && item.platforms.map((platform, index) => {
						const platformName = platform.platform.slug;
						const iconName = platformIconMappingMaterialCommunity[platformName] || null

						return iconName ? getlogo({iconName, index}) : null
					})}
			</Card.Footer>

			<Card.Background>
				<Image
					borderRadius={SIZES.xxSmall}
					width='100%'
					height='100%'
					alignSelf='center'
					source={{uri: item.background_image, width: 180, height: 300}}
				/>
			</Card.Background>
			
			
		</Card>
	</XStack>
	) : null
}
	
export default GameCard;