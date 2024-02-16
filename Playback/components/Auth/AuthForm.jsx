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
				initialValues={{ email: '' }}
				onSubmit={values => console.log(values)}
			>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.form}>
				<TextInput
					onChangeText={handleChange('email')}
					onBlur={handleBlur('email')}
					value={values.email}
				/>
				<Button 
					mode='contained'
					buttonColor={COLORS.secondary}
					dark={true}
					onPress={handleSubmit}
				>
					Submit
				</Button>
				</View>
			)}
			</Formik>
		</View>
	)
}
		
export default AuthForm