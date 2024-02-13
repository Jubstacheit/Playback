import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

import styles from './platformIcons.style';

const getPlatformIcons = () => {

	const platformIconMappingMaterialCommunity = {
		'playstation5' : 'sony-playstation',
		'xbox-series-x' : 'microsoft-xbox',
		'pc' : 'laptop',
		'nintendo-switch' : 'nintendo-switch',
		'ios' : 'apple-ios',
		'android' : 'android',
		'linux' : 'linux'
	}

	const getlogo = ({ iconName, index }) => {
		return <MaterialCommunityIcons style={styles.platformIcon} key={index} name={iconName} size={16} color={COLORS.black} />
	}

	return { getlogo, platformIconMappingMaterialCommunity };
};

export {
	getPlatformIcons
};