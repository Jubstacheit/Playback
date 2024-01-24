import { View, Image, Text } from 'react-native';
import { COLORS } from '../../constants';

const GameCard = ({ item }) => (
	<View>
		<Image
			source={{uri: item.background_image}}
			style={{width: 100, height: 100}}
		/>
		<View>
			<Text style={{color: COLORS.lightWhite }}>{item.name}</Text>
		</View>
	</View>
);
	
export default GameCard;