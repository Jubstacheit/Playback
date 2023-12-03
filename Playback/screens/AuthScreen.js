import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthForm from '../components/Auth/AuthForm';

const AuthScreen = () => {

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
		verticalAlign: 'middle',
	},
});

export default AuthScreen;

