import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Form, H2, H3, H4, Button, Input, View, Text, H6, H5 } from 'tamagui';
import { COLORS, SIZES } from '../../constants';
import { Formik } from 'formik';

const AuthForm = () => {

	const [status, setStatus] = useState('off');

	const register = (values) => {
		setStatus('loading')
		alert(JSON.stringify(values, null, 2));
		setTimeout(() => {
			setStatus('off')
		}, 2000)
	}


	return (
		<Formik
			initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
			onSubmit={(values) => {
				register(values)
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
			marginBottom={SIZES.xxLarge}
			width='100%'
		>
			<H3 margin='$6' fontWeight={'bold'}>Create an account</H3>

			<H6>Username</H6>
			<Input
				onChangeText={handleChange('username')}
				onBlur={handleBlur('username')}
				value={values.username}
				width={'100%'}
				maxWidth={260}
			/>

			<H6>Email</H6>
			<Input
				onChangeText={handleChange('email')}
				onBlur={handleBlur('email')}
				value={values.email}
				width={'100%'}
				maxWidth={260}
			/>

			<H6>Password</H6>
			<Input
				onChangeText={handleChange('password')}
				onBlur={handleBlur('password')}
				value={values.password}
				width={'100%'}
				maxWidth={260}
			/>

			<H6>Confirm Password</H6>
			<Input
				onChangeText={handleChange('confirmPassword')}
				onBlur={handleBlur('confirmPassword')}
				value={values.confirmPassword}
				width={'100%'}
				maxWidth={260}
			/>
			<Button 
				disabled={status !== 'off'} 
				size='$4'
				onPress={handleSubmit} 
				title="Submit"
				backgroundColor={COLORS.tertiary}
				hoverStyle={{backgroundColor: COLORS.secondary, borderColor: COLORS.secondary}}
				focusStyle={{backgroundColor: COLORS.secondary}}
				pressStyle={{backgroundColor: COLORS.secondary, borderColor: COLORS.secondary}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{status === 'loading' && <ActivityIndicator style={{marginRight: 8}} size="small" color={COLORS.secondary} />}
					<Text>{status === 'loading' ? 'Submitting...' : 'Register'}</Text>
				</View>
			</Button>
		</View>
		)}
	</Formik>
	)
}

export default AuthForm