import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
    },
});

export default instance;
