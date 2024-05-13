import axios from 'axios'

const baseURL = process.env.DB_HOST_ROUTE

export default axios.create({baseURL: baseURL})