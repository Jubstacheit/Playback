import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Form, H4, Button } from 'tamagui';
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
			<Form.Trigger asChild disabled={status !== 'off'}>
				<Button 
					disabledStyle={{opacity: 0.7}} 
					icon={status === 'submitting' ? () => <ActivityIndicator size="small" color={COLORS.secondary} /> : undefined}
					size='$4'
					backgroundColor={COLORS.tertiary}
					hoverStyle={{backgroundColor: COLORS.secondary, borderColor: COLORS.secondary}}
					focusStyle={{backgroundColor: COLORS.secondary}}
				>
					Submit
				</Button>
			</Form.Trigger>
		</Form>
	)
}

export default AuthForm