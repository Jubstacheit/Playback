import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
	const [data, setData] = useState([]);
	
	useEffect(() => {
		fetchData();
	}
	, []);
	
	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/users');
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