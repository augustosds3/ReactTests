import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-9378b.firebaseio.com'
});

export default instance;
