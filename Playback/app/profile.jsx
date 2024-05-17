import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { COLORS } from '../constants';

import Title from '../components/Title/Title';


const Profile = () => {
	const router = useRouter();

	const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
			<Title />


		</SafeAreaView>
	);
};
export default Profile;