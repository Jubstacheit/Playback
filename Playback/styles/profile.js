import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: COLORS.background
	},
	welcomeTextContainer: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginVertical: SIZES.small,
		marginTop: SIZES.xxLarge * 5
	},
	welcomeText: {
		fontSize: SIZES.xLarge,
		marginVertical: SIZES.xSmall,
		fontFamily: FONTS.medium,
	},
});

export default styles;