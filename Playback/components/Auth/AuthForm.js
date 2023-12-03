import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';


const AuthForm = () => {

	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			username: '',
			password: '',
			confirmPassword: '',
			email: ''
		}
	});
	const onSubmit = data => console.log(data);

return (
		<View  style={styles.container}>

			<Text style={styles.title}>Register on Playback</Text>

		{errors.username?.type === 'required' && (
        <Text style={styles.warning}>Username is required.</Text>
    )}
    	{errors.username?.type === 'maxLength' && (
        <Text style={styles.warning}>Username should be at most 20 characters long.</Text>
    	)}
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					style={styles.input}
					label="Username"
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
				/>
			)}
			name="username"
			rules={{ required: true, maxLength: 20 }}
		/>
		{errors.password?.type === 'required' && ( <Text style={styles.warning}>Password is required.</Text>)}
		{errors.password?.type === 'minLength' && ( <Text style={styles.warning}>Minimum length is 8.</Text>)}
		{errors.password?.type === 'maxLength' && ( <Text style={styles.warning}>Maximum length is 50.</Text>)}
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					style={styles.input}
					label="Password"
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					secureTextEntry
				/>
			)}
			name="password"
			rules={{ required: true, minLength: 8, maxLength: 50 }}
		/>
		{errors.confirmPassword && <Text style={styles.warning}>Confirmation is required.</Text>}
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					style={styles.input}
					label="Confirm Password"
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					secureTextEntry
				/>
			)}
			name="confirmPassword"
			rules={{ required: true, minLength: 8, maxLength: 50}}
		/>
		{errors.email?.type === 'required' && <Text style={styles.warning}>Email is required.</Text>}
		{errors.email?.type === 'maxLength' && <Text style={styles.warning}>Maximum length is 50.</Text>}
		{errors.email?.type === 'pattern' && <Text style={styles.warning}>Invalid email address.</Text>}
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextInput
					style={styles.input}
					label="Email"
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
				/>
			)}
			name="email"
			rules={{ required: true, maxLength: 50, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}}
		/>

		
		<Button
			style={styles.button}
			title="Register"
			mode="contained"
			onPress={handleSubmit(onSubmit)}
			method="post"
		>
			Register
		</Button>
	</View>
	);
};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		borderRadius: 10,
		...Platform.select({
			android: {
				width: '80%',
			},
			web: {
				width: '40%',
			},
		}),
	},
	input: {
		marginBottom: 15,
	},
	button: {
		marginTop: 10,
		backgroundColor: '#475C7D',
	},
	warning: {
		color: 'red'
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#ffffff',
		textAlign: 'center',
	}
});

export default AuthForm;