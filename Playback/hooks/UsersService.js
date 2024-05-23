import React, {useState} from 'react'
import db from '../hooks/db'

const createUser = () => {
	const [status, setStatus] = useState('off');
	
	const postForm = async (values) => {
		setStatus('loading')
		try {
			console.log(values)
			const res = await db.get(`users`)
			alert(res.data[0].username)
			setStatus('off')
		} catch (error) {
			console.log(error)
			setStatus('off')
		} finally {
			console.log('Done')
			setStatus('off')
		}
	}

	return { postForm, status, setStatus }
}

export {
	createUser
}