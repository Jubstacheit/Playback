import { StyleSheet, Platform, Dimensions } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS } from "../../constants";

const width = Dimensions.get('window').width;
const fontSize = width < 800 ? SIZES.medium : SIZES.large;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: SIZES.xSmall,
		borderRadius: SIZES.small,
		backgroundColor: COLORS.lightWhite,
		height: 'auto',
		...SHADOWS.medium,
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
		alignSelf: 'flex-start',
	},
	platformIcon: {
		marginRight: SIZES.xSmall / 2,
		marginVertical: SIZES.xSmall / 2,
	},
	gameTitle: {
		color: COLORS.black,
		fontFamily: FONTS.medium,
		fontWeight: 'bold',
		...Platform.select({
			web: {
				fontSize: fontSize,
			}
		})
	}
});

export default styles;