import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS } from '../constants';
import { createUser } from '../hooks/UsersService';

import Title from '../components/Title/Title';
import AuthForm from '../components/Auth/AuthForm';
import RegisterError from '../components/Error/RegisterError';

import { Text } from 'tamagui';

import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config);


const Profile = () => {
	const router = useRouter();
	const { postForm, status, setStatus, error, setError } = createUser();

	return (
		<TamaguiProvider config={tamaguiConfig}>
				<SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={{ flex: 1 }}
					>
					<Title />

					<AuthForm 
						postForm={postForm}
						status={status}
					/>
					{
						error ? 
						
						<RegisterError
							error={error}
							setError={setError}
						/>
						
						: null
					}
					</KeyboardAvoidingView>
				</SafeAreaView>
		</TamaguiProvider>
	);
};
export default Profile;