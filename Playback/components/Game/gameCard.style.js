import { StyleSheet, Platform } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: SIZES.xSmall,
		borderRadius: SIZES.small,
		backgroundColor: COLORS.primary,
	},
	gameImage: {
		width: 'auto',
		height: 120,
		...Platform.select({
			web: {
				height: 270,
			}
		}),
		resizeMode: 'cover',
	},
	gameTitle: {
		color: COLORS.lightWhite,
		fontFamily: FONTS.medium,
		fontSize: SIZES.small,
		...Platform.select({
			web: {
				fontSize: SIZES.medium,
			}
		}),
		marginVertical: SIZES.small / 2,
		marginHorizontal: SIZES.small,
	}
	/*container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  gameImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  }, */
});

export default styles;