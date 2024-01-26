import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
	errorTextContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		backgroundColor: COLORS.secondary,
		padding: SIZES.xSmall,
		borderRadius: SIZES.xSmall,
		width: '85%',
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: COLORS.primary,
		alignItems: 'center',
	},
	fetchErrorTextContainer: {
		flex: 1,
	},
	fetchErrorText: {
		color: COLORS.warning,
		fontFamily: FONTS.medium,
	},
	retryFetchButton: {
		backgroundColor: COLORS.tertiary,
	},
	fetchErrorRetryText: {
		color: COLORS.warning,
		fontFamily: FONTS.bold,
		textDecorationLine: 'underline',
}});

export default styles;