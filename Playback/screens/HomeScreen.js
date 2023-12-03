import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// Regular import doesn't work, so we need to use the following:
import axios from '../node_modules/axios';
import { BACKEND_DB_HOST } from '@env';
import AuthScreen from './AuthScreen';
import { StyleSheet } from 'react-native';

const RAWG_KEY = process.env.RAWG_KEY;
const DB = process.env.DB_HOST_ROUTE;

const HomeScreen = () => {
	return (
		<View style={styles.container}>
		<AuthScreen />
		</View>
		);
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			backgroundColor: '#00071a',
		},
	});
	
	export default HomeScreen;