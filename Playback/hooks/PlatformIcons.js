import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'tamagui';
import { COLORS } from '../constants/theme';

import { SIZES } from '../constants/theme';

const getPlatformIcons = () => {

	const platformIconMappingMaterialCommunity = {
		// Icons 
		'playstation5' : 'sony-playstation',
		'xbox-series-x' : 'microsoft-xbox',
		'pc' : 'laptop',
		'nintendo-switch' : 'nintendo-switch',
		'ios' : 'apple-ios',
		'android' : 'android',
		'linux' : 'linux',
		'macos' : 'apple',
		'wii' : 'nintendo-wii',
		'wii-u' : 'nintendo-wiiu',

		// Plain texts
		'playstation4' : 'PS4',
		'playstation3' : 'PS3',
		'playstation2' : 'PS2',
		'playstation' : 'PS1',
		'xbox-one': "ONE",
		'xbox-360': "360",
		'xbox-old': "XBOX",
	}

	const getlogo = ({ iconName, index }) => {	
		// If iconName equals to PS4, PS3, PS2 or PS1, return a Text 
		// with the platform name instead of an icon
		if (iconName === 'PS4' || iconName === 'PS3' || iconName === 'PS2' || iconName === 'PS1' || iconName === 'ONE' || iconName === '360' || iconName === 'XBOX') {
			return <Text 
				style={{
					marginRight: SIZES.xSmall / 2,
					marginVertical: SIZES.xSmall / 2,
					fontSize: SIZES.small,
					fontWeight: 'bold',
					alignSelf: 'center',
				}}
				key={index}
			>
				{iconName}
			</Text>
		}
		
		return <MaterialCommunityIcons 
				style={
				{	marginRight: SIZES.xSmall / 2,
					marginVertical: SIZES.xSmall / 2,
				}
				} 
				key={index} 
				name={iconName} 
				size={16} 
				color={COLORS.black} 
			/>
	}

	return { getlogo, platformIconMappingMaterialCommunity };
};

export {
	getPlatformIcons
};