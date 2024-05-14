import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config);

import Title from '../components/Title/Title';
import styles from '../styles/profile';


const Profile = () => {
	const router = useRouter();

	return (
		<TamaguiProvider config={tamaguiConfig}>
		<SafeAreaView style={styles.container}>
			<Title />
		</SafeAreaView>
		</TamaguiProvider>
	);
};
export default Profile;