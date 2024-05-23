import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { H3, Button, Input, View, Text, H6, ScrollView, XStack } from 'tamagui';
import { COLORS, SIZES } from '../../constants';
import { Formik } from 'formik';
import { MaterialIcons } from "@expo/vector-icons"

const AuthForm = ({ postForm, status }) => {


	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const register = (values) => {
		postForm(values)
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
				gap={SIZES.small}
				padding={SIZES.large}
				width='100%'
				marginBottom={SIZES.xxLarge}
			>
				<H3 margin='$6' fontWeight={'bold'}>Create an account</H3>

				<H6>Username</H6>
				<XStack
					alignItems='center'
					justifyContent='center'
					width={312}
				>
					<Input
						textContentType='username'
						onChangeText={handleChange('username')}
						onBlur={handleBlur('username')}
						value={values.username}
						width={'100%'}
						borderWidth={2}
						borderColor={COLORS.tertiary}
						hoverStyle={{borderColor: COLORS.secondary}}
						focusStyle={{borderColor: COLORS.secondary}}
						pressStyle={{borderColor: COLORS.secondary}}
					/>
				</XStack>
				{touched.username && errors.username ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.username}
					</Text> : null
				}

				<H6>Email</H6>
				<XStack
					alignItems='center'
					justifyContent='center'
					width={312}
				>
					<Input
						textContentType='emailAddress'
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						width={'100%'}
						borderWidth={2}
						borderColor={COLORS.tertiary}
						hoverStyle={{borderColor: COLORS.secondary}}
						focusStyle={{borderColor: COLORS.secondary}}
						pressStyle={{borderColor: COLORS.secondary}}
					/>
				</XStack>
				{touched.email && errors.email ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.email}
					</Text> : null
				}

				<H6>Password</H6>
				<XStack
					alignItems='center'
					justifyContent='center'
					borderWidth={2}
					borderColor={COLORS.tertiary}
					hoverStyle={{borderColor: COLORS.secondary}}
					focusStyle={{borderColor: COLORS.secondary}}
					pressStyle={{borderColor: COLORS.secondary}}
					borderRadius={SIZES.small}
				>
					<Input
						flex={1}
						width={260}
						maxWidth={260}
						secureTextEntry={!showPassword}
						maskType='password'
						textContentType='newPassword'
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						value={values.password}
					/>
					
					<MaterialIcons
						name={showPassword ? "visibility" : "visibility-off"} 
						size={24} 
						style={{alignSelf: 'center', marginHorizontal: SIZES.small}}
						color="black" 
						onPress={() => setShowPassword(!showPassword)} 
					/>

				</XStack>
					
				{touched.password && errors.password ? 
					<Text
						color={COLORS.warning}
						fontWeight={'bold'}
					>
						{errors.password}
					</Text> : null
				}

				<H6>Confirm Password</H6>
				<XStack
					alignItems='center'
					justifyContent='center'
					borderWidth={2}
					borderColor={COLORS.tertiary}
					hoverStyle={{borderColor: COLORS.secondary}}
					focusStyle={{borderColor: COLORS.secondary}}
					pressStyle={{borderColor: COLORS.secondary}}
					borderRadius={SIZES.small}
				>
					<Input
						flex={1}
						maxWidth={260}
						width={260}
						secureTextEntry={!showConfirmPassword}
						textContentType='password'
						onChangeText={handleChange('confirmPassword')}
						onBlur={handleBlur('confirmPassword')}
						value={values.confirmPassword}
					/>
					<MaterialIcons 
						name={showConfirmPassword ? "visibility" : "visibility-off"} 
						size={24} 
						color="black" 
						onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
						style={{alignSelf: 'center', marginHorizontal: SIZES.small}}
					/>
				</XStack>
					
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