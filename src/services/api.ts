import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:8000'
});