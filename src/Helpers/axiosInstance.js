import axios from 'axios';

const BASE_URL = "http://localhost:5014/api/v1";

const axiosIntance = axios.create();

axiosIntance.defaults.baseURL = BASE_URL;

axiosIntance.defaults.withCredentials = true;

    export default axiosIntance;