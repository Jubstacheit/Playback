import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { Heading, YStack } from 'tamagui';
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config);

import { FONTS, SIZES } from "../../constants"

const Title = () => {
	return (
		<TamaguiProvider config={tamaguiConfig}>
				<Heading marginTop={SIZES.xSmall} alignSelf='center' style={{fontFamily: FONTS.bold }} fontSize={36}>Playback</Heading>
		</TamaguiProvider>
	)
}
	
export default Title