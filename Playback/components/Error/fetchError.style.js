import { StyleSheet, Platform } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
	errorTextContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		backgroundColor: COLORS.secondary,
		padding: SIZES.xSmall,
		borderRadius: SIZES.xSmall,
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
		...Platform.select({
			web: {
				width: 'auto',
			}
		})
	},
	fetchErrorTextContainer: {
		flex: 1,
		padding: SIZES.xSmall / 4,
		paddingHorizontal: SIZES.xSmall / 2,
	},
	fetchErrorText: {
		color: COLORS.warning,
		fontFamily: FONTS.medium,
	},
	retryFetchButton: {
		padding: SIZES.xSmall / 4,
		paddingHorizontal: SIZES.xSmall / 2,
	},
	fetchErrorRetryText: {
		color: COLORS.warning,
		fontFamily: FONTS.bold,
}});

export default styles;