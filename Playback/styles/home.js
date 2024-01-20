import { StyleSheet } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: COLORS.background
	},
	titleSearchContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 0.4,
	},
	text: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
	title: {
		color: '#fff',
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		color: '#fff',
		fontSize: 30,
		fontWeight: '100',
	},
})

export default styles;