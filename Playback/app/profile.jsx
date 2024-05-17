import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';

import Title from '../components/Title/Title';
import AuthForm from '../components/Auth/AuthForm';


const Profile = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
			<Title />

			<AuthForm />
		</SafeAreaView>
	);
};
export default Profile;