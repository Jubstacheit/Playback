import { Dimensions, PixelRatio, View } from 'react-native';

// Function to calculate rem value based on screen density and font scale
const rem = (value) => {
	const { width, height, fontScale } = Dimensions.get('window');
	const pixelRatio = PixelRatio.get();
	
	// Calculate the base rem value by dividing the screen width by 100
	const baseRem = width / 100;
	
	// Calculate the adjusted rem value based on screen density and font scale
	const adjustedRem = baseRem * pixelRatio * fontScale;
	
	return value * adjustedRem;
};

export default rem;