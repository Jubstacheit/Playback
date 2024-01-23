import axios from 'axios';
import { RAWG_KEY }	from '@env';
import { useState, useEffect} from 'react';

const url = `https://api.rawg.io/api/`;
const key = RAWG_KEY;
// Const for today's date
let today = new Date();
// Const for last year's date, day to day 
let lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
// Format dates to RAWG API format
let todayStr = today.toISOString().slice(0, 10);
let lastYearStr = lastYear.toISOString().slice(0, 10);


const getGamesHome = (page) => {
	const [isLoading, setIsLoading] = useState(false);
	const [games, setGames] = useState([]);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get(`${url}games?key=${key}&ordering=-released, metacritic&page=${page}&page_size=20&dates=${lastYearStr},${todayStr}`);
			setGames(res.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			alert(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	}
	

	return { games, isLoading, error, refetch };
};


const search = async (searchTerm) => {
	const res = await axios.get(`${RAWG_API_URL}games?key=${RAWG_KEY}&search=${searchTerm}&page_size=100`);
	return res.data;
};

export {
	getGamesHome,
	search,
};