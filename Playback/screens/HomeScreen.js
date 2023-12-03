import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// Regular import doesn't work, so we need to use the following:
import axios from '../node_modules/axios';
import { BACKEND_DB_HOST } from '@env';

const RAWG_KEY = process.env.RAWG_KEY;
const DB = process.env.DB_HOST_ROUTE;

const HomeScreen = () => {
		
		const [users, setUsers] = useState([]);
		
		useEffect(() => {
			const fetchUsers = async () => {
				try {
					const response = await axios.get(`${DB}/user`);
					setUsers(response.data);
				} catch {
					console.log('Error fetching users');
				}
			};
			
			fetchUsers();
		}, []);
	
	return (
		<View>
		<Text>Welcome to the Home Screen!</Text>
		{users.map((user) => (
			<Text key={user.id}>{user.username}</Text>
			))}
		</View>
		);
	};
	
	export default HomeScreen;