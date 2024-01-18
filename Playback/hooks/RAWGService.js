import axios from './axios'

const RAWG_KEY = process.env.RAWG_KEY;
const RAWG_API_URL = `https://api.rawg.io/api/`;
// Const for today's date
let today = new Date();
// Const for last year's date, day to day 
let lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
// Format dates to RAWG API format
let todayStr = today.toISOString().slice(0, 10);
let lastYearStr = lastYear.toISOString().slice(0, 10);

const getGamesHome = async (page = 1) => {
	const res = await axios.get(`${RAWG_API_URL}games?key=${RAWG_KEY}&ordering=-released, metacritic&page=${page}&page_size=20&dates=${lastYearStr},${todayStr}`);
	return res.data;
};
const search = async (searchTerm) => {
	const res = await axios.get(`${RAWG_API_URL}games?key=${RAWG_KEY}&search=${searchTerm}&page_size=100`);
	return res.data;
};

export default {
	getGamesHome,
	search,
};