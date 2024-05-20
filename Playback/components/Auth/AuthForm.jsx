import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { H3, Button, Input, View, Text, H6, ScrollView } from 'tamagui';
import { COLORS, SIZES } from '../../constants';
import { Formik } from 'formik';
import { MaterialIcons } from "@expo/vector-icons"

const AuthForm = () => {

	const [status, setStatus] = useState('off');
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const register = (values) => {
		setStatus('loading')
		alert(JSON.stringify(values, null, 2));
		setTimeout(() => {
			setStatus('off')
		}, 2000)
	}

	const validate = (values) => {
		const errors = {};
		if (!values.username) {
			errors.username = 'Required';
		} else if (values.username.length < 2) {
			errors.username = 'Must be at least 2 characters';
		}
		
		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		
		if (!values.password) {
			errors.password = 'Required';
		} else if (values.password.length < 8) {
			errors.password = 'Must be at least 8 characters';
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Required';
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Passwords must match';
		}
		
		console.log(errors)
		return errors;
	};


	return (
		<ScrollView
			keyboardShouldPersistTaps='handled'
		>
			<Formik
				initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
				onSubmit={(values) => {
					register(values)
				}}
				validate={validate}
			>
			{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
			<View
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				gap={SIZES.large}
				padding={SIZES.large}
				width='100%'
				marginBottom={SIZES.xxLarge}
			>
				<H3 margin='$6' fontWeight={'bold'}>Create an account</H3>

				<H6>Username</H6>
				<View
					flexDirection='column'
					width={'100%'}
					alignItems='center'
				>
					<View
						flex={1}
						flexDirection='row'
						borderRadius='$4'
						width={'100%'}
						maxWidth={260}
					>
						<Input
							textContentType='username'
							onChangeText={handleChange('username')}
							onBlur={handleBlur('username')}
							value={values.username}
							width={'100%'}
							maxWidth={260}
							borderWidth={2}
							borderColor={COLORS.tertiary}
							hoverStyle={{borderColor: COLORS.secondary}}
							focusStyle={{borderColor: COLORS.secondary}}
							pressStyle={{borderColor: COLORS.secondary}}
						/>
					</View>
				</View>
				{touched.username && errors.username ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.username}
					</Text> : null
				}

				<H6>Email</H6>
				<View
					flexDirection='column'
					width={'100%'}
					alignItems='center'
				>
					<View
						flex={1}
						flexDirection='row'
						borderRadius='$4'
						width={'100%'}
						maxWidth={260}
					>
						<Input
							textContentType='emailAddress'
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							width={'100%'}
							maxWidth={260}
							borderWidth={2}
							borderColor={COLORS.tertiary}
							hoverStyle={{borderColor: COLORS.secondary}}
							focusStyle={{borderColor: COLORS.secondary}}
							pressStyle={{borderColor: COLORS.secondary}}
						/>
					</View>
				</View>
				{touched.email && errors.email ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.email}
					</Text> : null
				}

				<H6>Password</H6>
				<View
					flexDirection='column'
					alignItems='center'
					width={'100%'}
				>
					<View
						flex={1}
						flexDirection='row'
						borderRadius='$4'
						width={'100%'}
						maxWidth={260}
					>
						<Input
							secureTextEntry={!showPassword}
							width={260}
							maskType='password'
							textContentType='newPassword'
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							borderWidth={2}
							borderColor={COLORS.tertiary}
							hoverStyle={{borderColor: COLORS.secondary}}
							focusStyle={{borderColor: COLORS.secondary}}
							pressStyle={{borderColor: COLORS.secondary}}
						/>
						<MaterialIcons 
							name={showPassword ? "visibility" : "visibility-off"} 
							size={24} 
							style={{alignSelf: 'center', marginHorizontal: SIZES.small}}
							color="black" 
							onPress={() => setShowPassword(!showPassword)} 
						/>
					</View>
				</View>
				{touched.password && errors.password ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.password}
					</Text> : null
				}

				<H6>Confirm Password</H6>
				<View
					flexDirection='column'
					width={'100%'}
					alignItems='center'
				>
					<View
						flex={1}
						flexDirection={'row'}
						borderRadius='$4'
						width={'100%'}
						maxWidth={260}
					>
						<Input
							width={'100%'}
							secureTextEntry={!showConfirmPassword}
							textContentType='password'
							onChangeText={handleChange('confirmPassword')}
							onBlur={handleBlur('confirmPassword')}
							value={values.confirmPassword}
							borderWidth={2}
							borderColor={COLORS.tertiary}
							hoverStyle={{borderColor: COLORS.secondary}}
							focusStyle={{borderColor: COLORS.secondary}}
							pressStyle={{borderColor: COLORS.secondary}}
						/>
						<MaterialIcons 
							name={showConfirmPassword ? "visibility" : "visibility-off"} 
							size={24} 
							color="black" 
							onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
							style={{alignSelf: 'center', marginHorizontal: SIZES.small}}
						/>
					</View>
				</View>
				{touched.confirmPassword && errors.confirmPassword ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.confirmPassword}
					</Text> : null
				}

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
	</ScrollView>
	)
}

export default AuthForm