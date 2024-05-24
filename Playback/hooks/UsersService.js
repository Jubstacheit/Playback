import React, {useState} from 'react'
import db from '../hooks/db'

//Temporary
import axios from 'axios';

const createUser = () => {
	const [status, setStatus] = useState('off');
	
	const postForm = async (values) => {
		setStatus('loading')
		try {
			// Check if the username already exists
			try {
				const user = await db.get(`users/username/${values.username}`)
				console.log(user)
				
				if (user.data.length > 0) {
					alert(`Username ${values.username} already exists!`)
					setStatus('off')
					return
				}
			} catch (error) {
				console.log('Username not already seen', error)
			}
			setStatus('off')
			return

			// Check if the email already exists
			try {
				//const email = await db.get(`users/email?email=${values.email}`)
				const email = await axios.get(`http://localhost:4000/users/email/${values.email}`)
				if (email.data.length > 0) {
					alert(`Email ${values.email} already exists!`)
					setStatus('off')
					return
				}
			} catch {
				console.log('Email not already seen')
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

	return { postForm, status, setStatus }
}

export {
	createUser
}