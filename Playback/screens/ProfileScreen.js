import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthForm from '../components/Auth/AuthForm';

const ProfileScreen = ({navigation}) => {
	
	return (
		<View style={styles.container}>
		<AuthForm />
		</View>
		);
	};
	
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			backgroundColor: '#00071a',
		},
	});
	
	export default ProfileScreen;
	
