import { StyleSheet, Platform } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

const styles = StyleSheet.create({
	title: {
		color: '#fff',
		fontSize: SIZES.xxLarge,
		fontFamily: FONTS.bold,
		...Platform.select({
			web: {
				textAlign: 'center',
				fontSize: 60,
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