import { FontAwesome5 } from '@expo/vector-icons';
import { getPlatformIcons } from '../../hooks/PlatformIcons';

import { Card, Image, View, Text, XStack, H2, H4, H5, H6, Heading } from 'tamagui';

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
			alignSelf='center'
			borderRadius={SIZES.xxLarge}
			size="$2"
			elevate
			bordered
			animation="bouncy"
			height={340}
			width='100%'
			maxWidth={400}
			scale={0.95}
			hoverStyle={{ scale: 0.925 }}
			pressStyle={{ scale: 0.895 }}
		>
			<Card.Header padded borderRadius={SIZES.medium}>
				<Heading 
					ellipsizeMode='tail'
					borderRadius='$1'
					numberOfLines={2} 
					size='$6'
					fontSize='$6' 
					opacity={0.9} 
					textAlign='center' 
					alignSelf='center' 
					minWidth={150}
					maxWidth={175}
					flexWrap='wrap'
					fontWeight='bold'
					paddingHorizontal={SIZES.xSmall} 
					paddingVertical={SIZES.xxSmall}
					backgroundColor={COLORS.lightWhite}
				>
					{item.name}
				</Heading>
			</Card.Header>

			<Card.Footer size='$2' flexDirection='row' backgroundColor={COLORS.lightWhite} opacity={0.9}>
				{item.platforms && item.platforms.map((platform, index) => {
					const platformName = platform.platform.slug;
					const iconName = platformIconMappingMaterialCommunity[platformName] || null

					return iconName ? getlogo({iconName, index}) : <FontAwesome5 style={{ marginRight: SIZES.xSmall / 2, marginVertical: SIZES.xSmall / 2 }} name="question" size={12} color="black" />
				})}
			</Card.Footer>

			<Card.Background>
				<Image
					borderRadius={SIZES.xxSmall}
					width='100%'
					height='100%'
					marginTop='auto'
					source={{uri: item.background_image}}
				/>
			</Card.Background>
			
			
		</Card>
	</XStack>
	) : null
}
	
export default GameCard;