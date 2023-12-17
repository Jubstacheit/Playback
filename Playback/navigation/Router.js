import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/search" element={<SearchScreen />}>
				</Route>
				<Route path="/profile" element={<ProfileScreen />}>
				</Route>
				<Route path="/" element={<HomeScreen />}>
				</Route>
			</Routes>
		</Router>
		);
	}