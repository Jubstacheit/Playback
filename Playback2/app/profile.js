import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
	const router = useRouter();

	return (
		<View>
			<Text>Profile page</Text>
		</View>
	);
};
export default Profile;