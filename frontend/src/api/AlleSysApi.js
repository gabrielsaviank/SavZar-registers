import axios from "axios";

export const baseURL = "http://localhost:5000";

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});


instance.interceptors.request.use(
    function (config) {
        console.log("Request:", config);
        if (config.method.toUpperCase() === "POST" || config.method.toUpperCase() === "PUT") {
            console.log("Request Data:", config.data);
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
