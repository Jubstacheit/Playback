import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
	errorTextContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		backgroundColor: COLORS.tertiary,
		padding: SIZES.xSmall,
		borderRadius: SIZES.xSmall,
		width: '100%',
	},
	fetchErrorTextContainer: {

	},
	fetchErrorText: {
		color: COLORS.warning,
	},
	retryFetchButton: {
		backgroundColor: COLORS.primary,
	},
	fetchErrorRetryText: {
		color: COLORS.warning,
}});

export default styles;