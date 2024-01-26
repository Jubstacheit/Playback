import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: SIZES.medium,
		paddingHorizontal: SIZES.small,
	},
	gameList: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default styles;