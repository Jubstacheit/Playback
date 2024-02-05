import { StyleSheet, Platform, Dimensions } from 'react-native'

import { COLORS, FONTS, SIZES } from '../../constants'

const width = Dimensions.get('window').width;
const fontSize = width < 800 ? 34 : 50;

const styles = StyleSheet.create({
	title: {
		color: COLORS.black,
		fontSize: SIZES.xxLarge,
		fontFamily: FONTS.bold,
		...Platform.select({
			web: {
				textAlign: 'center',
				fontSize: fontSize,
				marginTop: SIZES.small,
			},
			android: {
				textAlign: 'left',
				marginHorizontal: SIZES.small
			}
		})
	}
})

export default styles;