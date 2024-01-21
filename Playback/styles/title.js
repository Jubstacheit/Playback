import { StyleSheet } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: COLORS.background,
	},
	title: {
		color: '#fff',
		fontSize: SIZES.xxLarge,
		fontFamily: FONTS.bold,
		...Platform.select({
			web: {
				textAlign: 'center',
				fontSize: 60,
				margin: SIZES.small
			},
			android: {
				textAlign: 'left',
				margin: SIZES.small
			}
		})
	}
})

export default styles;