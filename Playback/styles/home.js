import { StyleSheet, Platform } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: COLORS.background,
	},	
	subtitle: {
		color: COLORS.black,
		fontFamily: FONTS.medium,
		fontSize: SIZES.medium,
		...Platform.select({
			web: {
				fontSize: 30,
				margin: SIZES.small,
				textAlign: 'center'
			},
			android: {
				marginLeft: SIZES.small
			}
		})
	},
	recentGames: {
		color: COLORS.black,
		fontFamily: FONTS.medium,
		fontSize: SIZES.medium,
		textAlign: 'left',
		marginHorizontal: SIZES.small,
		...Platform.select({
			web: {
				fontSize: 30,
			}
		})
	}
})

export default styles;