import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// Regular import doesn't work, so we need to use the following:
import axios from '../node_modules/axios';
import { BACKEND_DB_HOST } from '@env';

const HomeScreen = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchData();
	},
	[]);
	
	const fetchData = async () => {
		try {
			const response = await axios.get(`${BACKEND_DB_HOST}/users`);
			setData(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	
	return (
		<View>
		<Text>Welcome to the Home Screen!</Text>
		<Text>Data: {JSON.stringify(data)}</Text>
		</View>
		);
	};
	
	export default HomeScreen;