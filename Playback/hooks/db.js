import axios from 'axios'
import { DB_HOST_ROUTE } from '@env'

const baseURL = DB_HOST_ROUTE

export default axios.create({baseURL: baseURL})