import axios from 'axios';
import { RAWG_KEY }	from '@env';
import { useState, useEffect, ActivityIndicator } from 'react';
import { COLORS } from '../constants';

const url = `https://api.rawg.io/api/`;
const key = RAWG_KEY;
// Const for today's date
let today = new Date();
// Const for last year's date, day to day 
let lastYears = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
// Format dates to RAWG API format
let todayStr = today.toISOString().slice(0, 10);
let lastYearsStr = lastYears.toISOString().slice(0, 10);


const getGamesHome = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [games, setGames] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get(`${url}games?key=${key}&ordering=-metacritic&page_size=40&page=${page}&dates=${lastYearsStr},${todayStr}`);
			setGames(previousGames => [...previousGames, ...res.data.results]);
			setPage(previousPage => previousPage + 1);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		if (!isLoading && !error) {
			fetchData();
		}
	}

	const retryFetch = () => {
		// Stop the refetch function from running
		setGames([]);
		setPage(1);
		setError(null);
		setIsLoading(true);

		// Interval to allow the loading animation to run
		setTimeout(() => {
			fetchData();
		}, 1500);
	}
	

	return { games, isLoading, error, refetch, retryFetch };
};


const search = async (searchTerm) => {
	const res = await axios.get(`${RAWG_API_URL}games?key=${RAWG_KEY}&search=${searchTerm}&page_size=30`);
	return res.data;
};

export {
	getGamesHome,
	search,
};