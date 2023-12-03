import axios from 'axios';
require('dotenv').config();

const API_BASE_URL = process.env.DB_HOST_ROUTE; // Replace with your backend URL

const ApiService = {
    async getUsers() {
        try {
            const response = await axios.get(`${API_BASE_URL}/users`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || error.message);
        }
    },
    
    // Other methods for different API calls (e.g., createUser, updateUser, deleteUser)
};

export default ApiService;