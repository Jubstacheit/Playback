import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Form, H2, H4, Button, Input, View } from 'tamagui';
import { COLORS, SIZES } from '../../constants';
import { Formik } from 'formik';

const AuthForm = () => {

	const [status, setStatus] = useState('off');


	return (
		<Formik
			initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
			onSubmit={(values) => {
				setStatus('loading')
				console.log(values)
				setTimeout(() => {
					setStatus('off')
				}, 2000)
			}}
		>
		{({ handleChange, handleBlur, handleSubmit, values }) => (
		<View
			flex={1}
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			gap={SIZES.large}
			padding={SIZES.large}
			margin={'auto'}
			width='100%'
		>
			<Input
				onChangeText={handleChange('username')}
				onBlur={handleBlur('username')}
				value={values.username}
			/>
			<Input
				onChangeText={handleChange('email')}
				onBlur={handleBlur('email')}
				value={values.email}
			/>
			<Input
				onChangeText={handleChange('password')}
				onBlur={handleBlur('password')}
				value={values.password}
			/>
			<Input
				onChangeText={handleChange('confirmPassword')}
				onBlur={handleBlur('confirmPassword')}
				value={values.confirmPassword}
			/>
			<Button disabled={status !== 'off'} onPress={handleSubmit} title="Submit">
				Register
			</Button>
		</View>
		)}
	</Formik>
	)
}

export default AuthForm