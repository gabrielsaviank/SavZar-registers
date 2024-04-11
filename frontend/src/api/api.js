import axios from "axios";

export const baseUrl = "http://localhost:5000";

const instance = axios.create({
    baseUrl: baseUrl,
});

export default instance;
