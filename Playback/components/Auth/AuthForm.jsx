import React, { useState, useEffect } from 'react'
import { YStack, Text, Form, H4 } from 'tamagui';
import { COLORS } from '../../constants';

const AuthForm = () => {

	const [status, setStatus] = useState('off');

	useEffect(() => {
		if (status === 'submitting') {
			const timer = setTimeout(() => setStatus('off'), 2000)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [status])


	return (
		<Form
			flex={1}
			alignItems='center'
			justifyContent='center'
			onSubmit={() => setStatus('submitting')}
			borderWidth={1}
			borderRadius='$4'
			backgroundColor={COLORS.lightWhite}
			padding='$8'
			gap='$2'
			alignSelf='center'
			width={300}
		>
			<H4>AuthForm</H4>
		</Form>
	)
}

export default AuthForm