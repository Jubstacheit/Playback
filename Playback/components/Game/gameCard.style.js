import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
	},
	image: {
		width: '100%',
		height: '80%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		resizeMode: 'cover',
		position: 'relative',
		top: 0,
		left: 0,
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default styles;