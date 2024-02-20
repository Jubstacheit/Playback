import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import Title from '../components/Title/Title';
import AuthForm from '../components/Auth/AuthForm';
import styles from '../styles/profile';

const Profile = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>

			{/* Title */}
			<Title />

			{/* Welcome message */}
			<View style={styles.welcomeTextContainer}>
				<Text style={styles.welcomeText}>Create an account</Text>
			</View>

			{/* Form */}
			<AuthForm />

		</SafeAreaView>
	);
};
export default Profile;