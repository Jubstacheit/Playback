import { StyleSheet, Platform } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: SIZES.xxLarge,
		marginHorizontal: SIZES.small,
		height: 50,
		...Platform.select({
			web: {
				width: '50%',
				alignSelf: 'center',
			}
		})
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
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
		borderRadius: SIZES.medium,
		alignItems: 'center',
	},
	searchBtnImg: {
		width: "50%",
		height: "50%"
	}
});

export default styles;