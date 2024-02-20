import { StyleSheet, Platform } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		width: '70%',
		...Platform.select({
			web: {
				width: '30%',
			},
		})
	},
	input: {
		marginVertical: SIZES.xSmall,
	},
	submitBtn: {
		marginVertical: SIZES.medium,
		paddingVertical: SIZES.xSmall / 4,
	}
});

export default styles;