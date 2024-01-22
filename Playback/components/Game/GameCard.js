import { View, Image, Text } from 'react-native';

const GameCard = ({ item }) => (
	<View>
		<Image
			source={{uri: item.background_image}}
		/>
		<View>
			<Text>{item.name}</Text>
		</View>
	</View>
);
	
export default GameCard;