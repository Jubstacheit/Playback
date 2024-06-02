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
		'game-boy': 'nintendo-game-boy',

		// Plain texts
		'playstation4' : 'PS4',
		'playstation3' : 'PS3',
		'playstation2' : 'PS2',
		'playstation' : 'PS1',
		'xbox-one': "ONE",
		'xbox-360': "360",
		'xbox-old': "XBOX",
		'nintendo-3ds' : '3DS',
		'nintendo-ds' : 'DS',
		'nintendo-dsi' : 'DSI',
		'ps-vita' : 'PSVITA',
		'psp' : 'PSP',
		'gamecube' : 'GC',
		'nintendo-64' : 'N64',
		'game-boy-color': 'GBC',
		'game-boy-advance': 'GBA',
		'snes' : 'SNES',
		'nes' : 'NES',
		'commodore-amiga': 'AMIGA',
		'atari-2600': 'ATARI-2600',
		'atari-5200': 'ATARI-5200',
		'atari-7800': 'ATARI-7800',
		'atari-lynx': 'LYNX',
		'atari-flashback': 'FLASHBACK',
		'atari-8-bit': 'ATARI-8BIT',
		'atari-st': 'ATARI-ST',
		'jaguar': 'JAGUAR',
		'ATARI-XEGS': 'ATARI-XEGS',
		'sega-saturn': 'SATURN',
		'sega-cd': 'SEGA-CD',
		'sega-32x': 'SEGA-32X',
		'sega-master-system': 'MASTER-SYSTEM',
		'genesis': 'GENESIS',
		'dreamcast': 'DREAMCAST',
		'3do': '3DO',
		'neogeo': 'NEOGEO',
		'game-gear': 'GAME-GEAR',
	}

	const getlogo = ({ iconName, index }) => {	
		// If iconName equals to PS4, PS3, PS2 or PS1, return a Text 
		// with the platform name instead of an icon
		if (iconName === 'PS4' || iconName === 'PS3' || iconName === 'PS2' || iconName === 'PS1' || iconName === 'ONE' || iconName === '360' || iconName === 'XBOX' || iconName === '3DS' || iconName === 'DS' || iconName === 'DSI' || iconName === 'PSVITA' || iconName === 'PSP' || iconName === 'GC' || iconName === 'N64' || iconName === 'GBC' || iconName === 'GBA' || iconName === 'SNES' || iconName === 'NES' || iconName === 'AMIGA' || iconName === 'ATARI-2600' || iconName === 'ATARI-5200' || iconName === 'ATARI-7800' || iconName === 'LYNX' || iconName === 'FLASHBACK' || iconName === 'ATARI-8BIT' || iconName === 'ATARI-ST' || iconName === 'JAGUAR' || iconName === 'ATARI-XEGS' || iconName === 'SATURN' || iconName === 'SEGA-CD' || iconName === 'SEGA-32X' || iconName === 'MASTER-SYSTEM' || iconName === 'GENESIS' || iconName === 'DREAMCAST' || iconName === '3DO' || iconName === 'NEOGEO' || iconName === 'GAME-GEAR') {
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