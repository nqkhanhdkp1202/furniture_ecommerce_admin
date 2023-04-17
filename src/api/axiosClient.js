import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: {
        serialize: params => queryString.stringify(params, {arrayFormat: 'bracket'}),
    }
});

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config
});

axios.interceptors.response.use((response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }, (error) => {
        throw (error);
    }
)

export default axiosClient;