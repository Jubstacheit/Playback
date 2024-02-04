import { StyleSheet, Platform } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: SIZES.xSmall,
		borderRadius: SIZES.small,
		backgroundColor: COLORS.black,
		height: 'auto',
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
		paddingVertical: SIZES.medium / 2,
		marginHorizontal: SIZES.medium,
		height: 'auto',
	},
	platformContainer: {
		flexDirection: 'row',
		flexGrow: 1,
	},
	platformIcon: {
		marginRight: SIZES.xSmall / 2,
		marginVertical: SIZES.xSmall / 2,
	},
	gameTitle: {
		color: COLORS.lightWhite,
		fontFamily: FONTS.medium,
		fontWeight: 'bold',
		...Platform.select({
			web: {
				fontSize: SIZES.large,
			}
		})
	}
});

export default styles;