import { StyleSheet, Platform } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: SIZES.small,
		marginHorizontal: SIZES.small,
		height: 45,
		...Platform.select({
			web: {
				width: '30%',
				alignSelf: 'center',
			}
		})
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
		borderWidth: 1,
		borderColor: COLORS.black,
		marginRight: SIZES.small,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SIZES.medium,
		height: "100%"
	},
	searchBar: {
		fontFamily: FONTS.regular,
		width: '100%',
		height: '100%',
		paddingHorizontal: SIZES.medium,
	},
	searchBtn: {
		width: 50,
		height: "100%",
		backgroundColor: COLORS.lightWhite,
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: COLORS.black,
		borderRadius: SIZES.medium,
		alignItems: 'center',
	},
	searchBtnImg: {
		width: "50%",
		color: COLORS.primary,
		height: "50%"
	}
});

export default styles;