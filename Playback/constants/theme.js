import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

const COLORS = {
	primary: '#B8336A',
	secondary: '#C490D1',
	tertiary: '#ACACDE',
	gray: '#ABDAFC',
	gray2: '#E5FCFF',

	white: "#ffffff",
	black: "#000000",
	lightWhite: "#FAFAFC",
	background: "#ffffff",

	warning: "#ff0f0f",
}

const FONTS = {
	regular: "DMRegular",
	medium: "DMMedium",
	bold: "JetBrainsMonoBold",
}

const SIZES = {
	xSmall: 10,
	small: 12,
	medium: 16,
	large: 20,
	xLarge: 24,
	xxLarge: 32,
}

const SHADOWS = {
	small: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	medium: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},
}

export { COLORS, FONTS, SIZES, SHADOWS, horizontalScale, verticalScale, moderateScale };