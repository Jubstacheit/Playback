import { Heading } from 'tamagui';

import { FONTS, SIZES } from "../../constants"

const Title = () => {
	return (
			<Heading marginVertical={SIZES.medium} alignSelf='center' style={{fontFamily: FONTS.bold }} fontSize={36}>Playback</Heading>
	)
}
	
export default Title