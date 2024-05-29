import React, {useState} from 'react'
import db from '../hooks/db'

const LOCAL_URL = process.env.DB_HOST_LOCAL || null

const createUser = () => {
	const [status, setStatus] = useState('off');
	const [error, setError] = useState(null);
	
	const postForm = async (values) => {
		setStatus('loading')
		try {
			// Check if the username already exists
			try {
				const user = await db.get(`users/username/${values.username}`)
				if (user.data && user.data.username === values.username) {
					setError('Username already exists')
					setStatus('off')
					return
				}
			} catch (error) {
				console.log('Username not used')
			}

			// Check if the email already exists
			try {
				const user = await db.get(`users/email/${values.email}`)
				if (user.data && user.data.email === values.email) {
					setError('Email already exists')
					setStatus('off')
					return
				}
			} catch (error) {
				console.log('Email not used')
			}


			// Register the user
			const res = await db.post(`users`, values)
			alert(`Successfully registered! Welcome ${res.data.username}!`)
			setStatus('off')
			return
		} catch (error) {
			setStatus('off')
			return
		} finally {
			setStatus('off')
			return
		}
	}

	return { postForm, status, setStatus, error, setError }
}

export {
	createUser
}