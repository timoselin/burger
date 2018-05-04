import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-325ae.firebaseio.com/'
});

export default instance;