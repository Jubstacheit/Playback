import { View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { Button, TextInput } from 'react-native-paper'

import { COLORS } from '../../constants'

import styles from './authForm.style'

const AuthForm = () => {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				onSubmit={values => console.log(`Vous avez l'username ${values.username} et le mail ${values.email}. Votre mot de passe est caché mais présent.`)}
			>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.form}>
					<TextInput 
						onChangeText={handleChange('username')}
						onBlur={handleBlur('username')}
						value={values.username}
						style={styles.input}
						label={"Username"}
						type="text"
						enterKeyHint='next'
						selectionColor={COLORS.secondary}
					/>
					<TextInput
						onChangeText={handleChange('email')}
						onBlur={handleBlur('email')}
						value={values.email}
						label={"Email"}
						style={styles.input}
						type="email"
						selectionColor={COLORS.secondary}
					/>
					<TextInput
						onChangeText={handleChange('password')}
						style={styles.input}
						onBlur={handleBlur('password')}
						value={values.password}
						secureTextEntry
						label={"Password"}
						type="password"
						selectionColor={COLORS.secondary}
					/>
					<Button 
						mode='elevated'
						buttonColor={COLORS.secondary}
						dark={true}
						onPress={handleSubmit}
						style={styles.submitBtn}
						loading={false}
						accessibilityLabel='Register button'

					>
						Register
					</Button>
				</View>
			)}
			</Formik>
		</View>
	)
}
		
export default AuthForm