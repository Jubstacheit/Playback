import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

import Title from '../components/Title/Title';
import styles from '../styles/profile';

const Profile = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Title />
		</SafeAreaView>
	);
};
export default Profile;