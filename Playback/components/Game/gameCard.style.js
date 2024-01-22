import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	card: {
		width: '45%',
		borderRadius: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 1,
		shadowRadius: 4.65,
		elevation: 7,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'black',
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