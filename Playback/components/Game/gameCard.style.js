import { StyleSheet, Platform } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		margin: SIZES.xSmall,
		borderRadius: SIZES.small,
		backgroundColor: COLORS.primary,
		height: 'auto'
	},
	gameImage: {
		width: 'auto',
		borderTopRightRadius: SIZES.small,
		borderTopLeftRadius: SIZES.small,
		...Platform.select({
			web: {
				height: 180,
			},
			android: {
				height: 160,
			}
		}),
		resizeMode: 'cover',
	},
	textContainer: {
		flexDirection: 'column',
		marginVertical: SIZES.medium / 2,
		marginHorizontal: SIZES.medium,
		height: 'auto',
		color: COLORS.lightWhite,
	},
	platformContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	platformIcon: {
		color: COLORS.white,
		fontFamily: FONTS.regular,
		fontSize: SIZES.xSmall,
		margin: SIZES.xSmall / 2,
	},
	gameTitle: {
		color: COLORS.lightWhite,
		fontFamily: FONTS.medium,
		fontSize: SIZES.medium,
		fontWeight: 'bold',
		...Platform.select({
			web: {
				fontSize: SIZES.large,
			}
		})
	}
});

export default styles;