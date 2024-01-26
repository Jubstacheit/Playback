import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: SIZES.small,
	},
	gameImage: {
		width: 'auto',
		height: SIZES.xxLarge * 5,
		borderRadius: SIZES.small,
		resizeMode: 'cover',
	},
	gameTitle: {
		color: COLORS.lightWhite,
		fontFamily: FONTS.regular,
		flex: 1
	}
});

export default styles;