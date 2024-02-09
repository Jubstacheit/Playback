import { StyleSheet, Platform, Dimensions } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

const width = Dimensions.get('window').width;
const fontSize = width < 800 ? SIZES.xLarge : 30;
const fontSizeRecentGames = width < 800 ? SIZES.large : 30;

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
				fontSize: fontSize,
				textAlign: 'center'
			},
			android: {
				marginLeft: SIZES.small,
				marginBottom: SIZES.xxLarge
			}
		})
	},
	recentGames: {
		color: COLORS.black,
		fontFamily: FONTS.medium,
		fontSize: SIZES.large,
		textAlign: 'left',
		marginHorizontal: SIZES.small,
		...Platform.select({
			web: {
				fontSize: fontSizeRecentGames,
				marginHorizontal: SIZES.large,
				marginVertical: SIZES.small
			}
		})
	}
})

export default styles;